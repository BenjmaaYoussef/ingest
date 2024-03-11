"use client";

import { createClient } from "@/app/utils/client";
import { redirect, useRouter } from "next/navigation";

export default function Buttons({ popular, planId, testId }) {
  const router = useRouter();
  const supabase = createClient();
  if (popular) {
    return (
      <button
        type="button"
        onClick={async () => {
          const { data, error } = await supabase
            .from("tests")
            .update({ plan_id: planId })
            .eq("id", testId);
          if (!error) {
            const queryParamString = new URLSearchParams({
              testId,
            }).toString();
            console.log("yes");
            router.push("/login?" + queryParamString);
          }
        }}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-blue-600 text-white shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Get my results
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={async () => {
          const { data, error } = await supabase
            .from("tests")
            .update({ plan_id: planId })
            .eq("id", testId);
          if (!error) {
            const queryParamString = new URLSearchParams({
              testId,
            }).toString();
            console.log("yes");
            router.push("/login?" + queryParamString);
          }
        }}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Get my results
      </button>
    );
  }
}
