"use server";

import { redirect } from "next/navigation";
import { createClient } from "./server";

export async function logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (!error) {
    redirect("/");
  }
}
