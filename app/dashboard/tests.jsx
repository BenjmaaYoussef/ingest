import Link from "next/link";
import { createClient } from "../utils/server";

export default async function Tests({ tests }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("tests")
    .select()
    .in("id", tests)
    .order("created_at", { ascending: false });
  console.log(tests);
  return (
    <>
      {/* Card Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h1 className="text-2xl font-bold mb-3">Recent taken tests:</h1>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {data.map((el, i) => (
            <Link
              key={el.id}
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href={
                el.paid
                  ? "/dashboard/report/" + el.id
                  : "/payment?test=" + el.id
              }
            >
              <div className="p-4 md:p-5">
                <div className="flex">
                  <div>{i + 1}</div>

                  <div className="grow ms-5">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                      {new Date(el.created_at).toLocaleDateString()}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {el.paid ? "Paid" : "Pending Payment"}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
    </>
  );
}
