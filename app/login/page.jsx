import { redirect } from "next/navigation";
import { createClient } from "../utils/server";
import GoogleBtn from "./GoogleBtn";

export default async function Page({ searchParams }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    if (searchParams.testId) {
      console.log("fired");
      const { data: profile, error: profileError } = await supabase.rpc(
        "add_test_to_profile",
        {
          profile_id: user.id,
          new_test: searchParams.testId,
        }
      );
      if (!profileError) {
        redirect("/payment?test=" + searchParams.testId);
      }
    } else {
      redirect("/dashboard");
    }
  }
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 h-dvh">
      <div className="h-full p-6">
        <div className="bg-blue-500 p-5 w-full gap-10 justify-center items-center flex flex-col h-full rounded-3xl">
          <div className="flex items-center gap-2">
            <svg
              className="w-9 h-9 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"
              />
            </svg>
            <h1 className="font-bold text-center w-full text-3xl text-white">
              IQ Test Academy
            </h1>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-xl font-bold">
                  Elevate Your Intelligence
                </div>
                <div>Access Personalized Insights</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-xl font-bold">Ignite Your Intellect</div>
                <div>A Journey of Self-Discovery</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-xl font-bold">Navigate Your Mind</div>
                <div>Explore Your Cognitive Landscape</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8">
        <GoogleBtn />
      </div>
    </div>
  );
}
