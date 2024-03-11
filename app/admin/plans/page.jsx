import { createClient } from "@/app/utils/server";
import Card from "./Card";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("plans")
    .select()
    .order("popular", { ascending: true });
  console.log(data);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-left font-bold text-gray-800 sm:text-2xl dark:text-white">
          Manage plans
        </h1>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Create new
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
              d="M5 12h14m-7 7V5"
            />
          </svg>
        </button>
      </div>
      <div className="mt-12">
        <Card plans={data} />
      </div>
    </div>
  );
}
