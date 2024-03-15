"use client";

import { redirect, useRouter } from "next/navigation";
import { createClient } from "../utils/client";

export default function LogoutBtn() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-s sm:border-white/[.3] sm:my-6 sm:ps-6"
      onClick={async () => {
        const { error } = await supabase.auth.signOut();

        if (!error) {
          router.push("/");
        }
      }}
    >
      <svg
        className="w-5 h-5 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
        />
      </svg>
      Log out
    </button>
  );
}
