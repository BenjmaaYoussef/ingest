import Link from "next/link";
import PaymentBtn from "./PaymentBtn";
import { redirect } from "next/navigation";
import { createClient } from "../utils/server";
export default async function ({ searchParams }) {
  if (!searchParams.test) {
    redirect("/");
  }
  const supabase = createClient();
  const { data: userdata, error: usererror } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("tests")
    .select()
    .eq("id", searchParams.test);
  if (error) {
    redirect("/");
  } else {
    if (!data[0].plan_id || usererror) {
      redirect("/getreport/" + searchParams.test);
    } else {
      const { data: plandata, error: planerror } = await supabase
        .from("plans")
        .select()
        .eq("id", data[0].plan_id);
      return (
        <div className="  h-dvh">
          <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <Link
              href="/dashboard"
              className="text-2xl font-bold text-gray-800"
            >
              IQ Test Academy
            </Link>
            <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </a>
                    <span className="font-semibold text-gray-900">
                      Take test
                    </span>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li className="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                    <span className="font-semibold text-gray-900">Payment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 h-full">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Order Summary</p>
              <div className="mt-8 space-y-3 rounded-lg border bg-white sm:px-6">
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  <div className="flex w-full flex-col px-2 py-4">
                    <span className="font-semibold">{plandata[0].title}</span>
                    <span className="float-right text-gray-400">
                      {plandata[0].subtitle}
                    </span>
                    <p className="text-lg font-bold">${plandata[0].price}</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-lg font-medium">
                Account: {userdata.user.email}
              </p>
              <p className="mt-1 text-lg font-medium">
                You will be redirected to your dashboard after payment to
                consult your report.
              </p>
            </div>
            <div className="mt-10 bg-gray-100 px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Secure payment</p>
              <div className="">
                {/* Total */}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    ${plandata[0].price}
                  </p>
                </div>
              </div>
              <PaymentBtn
                price={plandata[0].price}
                userId={userdata.user.email}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
