import { Suspense } from "react";
import Header from "./Header";
import Loading from "./loading";
import { createClient } from "../utils/server";
import { redirect } from "next/navigation";
export default async function Layout({ children }) {
  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    redirect("/");
  } else {
    return (
      <div>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    );
  }
}
