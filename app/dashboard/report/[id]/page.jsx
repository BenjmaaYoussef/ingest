import Header from "@/app/dashboard/Header";
import { createClient } from "@/app/utils/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import Results from "./components/Results";
import Accuracy from "./components/Accuracy";
import TimeTaken from "./components/TimeTaken";
import Report from "./components/Report";

export default async function ({ params }) {
  function calculateIQ(score) {
    const correctAnswerPoints = 5;
    const incorrectAnswerPoints = -1;

    const totalScore =
      score.correct * correctAnswerPoints +
      score.incorrect * incorrectAnswerPoints;

    return totalScore;
  }
  const { id } = params;
  const supabase = createClient();
  let test;
  let qa;
  let result = 0;
  let plan;
  const { data: userdata, error: usererror } = await supabase.auth.getUser();
  if (userdata.user) {
    const { data, error } = await supabase
      .from("profiles")
      .select("tests")
      .eq("id", userdata.user.id);
    if (data[0].tests.includes(id)) {
      const { data: testdata, error: testerror } = await supabase
        .from("tests")
        .select()
        .eq("id", id);
      test = testdata[0];
      const { data: qadata, error: qaerror } = await supabase
        .from("questions")
        .select()
        .in(
          "id",
          Object.keys(test.answers).map(function (x) {
            return parseInt(x, 10);
          })
        );
      const { data: plandata, error: planerror } = await supabase
        .from("plans")
        .select()
        .eq("id", test.plan_id);
      plan = plandata[0];
      qa = qadata;
      Object.keys(test.answers).map((el, i) => {
        if (test.answers[el] == qa.find((x) => x.id == el).answer) {
          result++;
        }
      });
    } else {
      redirect("/");
    }
  } else {
    redirect("/");
  }

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex lg:flex-col lg:justify-center lg:items-center md:justify-between items-end gap-2">
          <div className="text-4xl font-bold">Summary</div>
          <div className="flex gap-2">
            <Link
              href="/dashboard"
              className="bg-black px-4 py-2 rounded-lg text-white flex gap-3 hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
                <path d="M2 6c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
              </svg>
              Back to dashboard
            </Link>
            {plan.indepth && (
              <Link
                href="/dashboard"
                className="bg-black px-4 py-2 rounded-lg text-white flex gap-3 hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h1v-4c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4c0 .6-.4 1-1 1H9Z"
                    clipRule="evenodd"
                  />
                </svg>
                Print report
              </Link>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-2">
          <Results
            value={calculateIQ({
              correct: result,
              incorrect: Object.keys(test.answers).length - result,
            })}
          />
          <Accuracy
            value={(result / Object.keys(test.answers).length) * 100}
            show={plan.simplified == true}
          />
          <TimeTaken value={test.time_taken} show={plan.simplified == true} />
        </div>
        <div>
          <Report answers={test.answers} qa={qa} show={plan.indepth == true} />
        </div>
      </div>
    </div>
  );
}
