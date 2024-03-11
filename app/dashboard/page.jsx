import { redirect } from "next/navigation";
import { createClient } from "../utils/server";
import Header from "./Header";
import Tests from "./tests";

export default async function Page() {
  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    redirect("/");
  } else {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", userData.user.id);

    return (
      <>
        {/* ========== HEADER ========== */}

        <Tests tests={data[0].tests} />
        {/* ========== END HEADER ========== */}
      </>
    );
  }
}
