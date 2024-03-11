import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const test = searchParams.get("test");
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const cookieStore = cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name) {
            return cookieStore.get(name)?.value;
          },
          set(name, value, options) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name, options) {
            cookieStore.delete({ name, ...options });
          },
        },
      }
    );
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      console.log(test);
      const { data: userdata } = await supabase.auth.getUser();
      console.log(userdata.id);
      if (test != "undefined") {
        const { data: profile, error: profileError } = await supabase.rpc(
          "add_test_to_profile",
          {
            profile_id: userdata.user.id,
            new_test: test,
          }
        );
        console.log(profileError);
        console.log(profile);
      }

      return NextResponse.redirect(`https://iqtest-tawny.vercel.app${next}`);
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`https://iqtest-tawny.vercel.app/auth/auth-code-error`);
}
