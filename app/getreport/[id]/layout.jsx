import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/app/test/components/Header";
import { createClient } from "@/app/utils/server";
import { redirect } from "next/navigation";

export default async function Layout({ children, params }) {
  const supabase = createClient();
  const { id } = params;
  const { data, error } = await supabase.from("tests").select().eq("id", id);
  if (error) {
    redirect("/");
  }
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
