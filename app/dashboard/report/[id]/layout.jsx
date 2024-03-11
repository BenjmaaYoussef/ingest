import { createClient } from "@/app/utils/server";
import { redirect } from "next/navigation";

export default async function Layout({ children, params }) {
  const { id } = params;
  const supabase = createClient();
  const { data: userdata } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles")
    .select("tests")
    .eq("id", userdata.user.id);
  if (!data[0].tests.includes(id)) {
    redirect("/dashboard");
  }
  return <div>{children}</div>;
}
