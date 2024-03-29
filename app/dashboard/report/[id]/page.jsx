import Header from "@/app/dashboard/Header";
import { createClient } from "@/app/utils/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import Results from "./components/Results";
import Accuracy from "./components/Accuracy";
import TimeTaken from "./components/TimeTaken";
import Report from "./components/Report";
import PrintBtn from "./components/PrintBtn";
import { DonutChartUsageExample } from "./components/TypeChart";
import { CorrectChartUsageExample } from "./components/CorrectChart";
import FBbtn from "./components/FBbtn";
import Twiiterbtn from "./components/Twitterbtn";
export default async function ({ params }) {
  const data = [
    {
      minIq: 40,
      maxIq: 55,
      percentile: 0.013,
    },
    {
      minIq: 55,
      maxIq: 70,
      percentile: 2.14,
    },
    {
      minIq: 70,
      maxIq: 85,
      percentile: 13.6,
    },
    {
      minIq: 85,
      maxIq: 100,
      percentile: 34.13,
    },
    {
      minIq: 100,
      maxIq: 115,
      percentile: 34.13,
    },
    {
      minIq: 115,
      maxIq: 130,
      percentile: 13.6,
    },
    {
      minIq: 130,
      maxIq: 135,
      percentile: 2.14,
    },
    {
      minIq: 135,
      maxIq: 200,
      percentile: 0.013,
    },
  ];
  function calculateIQ(score) {
    const correctAnswerPoints = 5;
    const incorrectAnswerPoints = -1;

    const totalScore =
      score.correct * correctAnswerPoints +
      score.incorrect * incorrectAnswerPoints;

    return totalScore + 50;
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
  const finalRes = calculateIQ({
    correct: result,
    incorrect: Object.keys(test.answers).length - result,
  });
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col lg:justify-center lg:items-center md:justify-between items-end gap-2">
          <div className="text-4xl font-bold text-center w-full">Summary</div>
          <div className="flex gap-2 w-full no-print flex-wrap">
            {plan.indepth && <PrintBtn />}
            <FBbtn finalRes={finalRes} />
            <Twiiterbtn finalRes={finalRes} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-2 print:grid-cols-3">
          <Results
            //to change
            value={finalRes}
          />
          <Accuracy
            value={(result / Object.keys(test.answers).length) * 100}
            show={plan.simplified == true}
          />
          <TimeTaken value={test.time_taken} show={plan.simplified == true} />
        </div>
        <div className="grid grid-cols-1 mt-4 gap-2">
          {data.map((sin) => {
            if (finalRes > sin.minIq && finalRes < sin.maxIq) {
              return (
                <div className="bg-blue-600 text-white rounded-full text-center font-bold text-sm py-2">
                  Only {sin.percentile}% in the world share the same IQ as you!
                </div>
              );
            }
          })}
        </div>
        <div>
          <Report answers={test.answers} qa={qa} show={plan.indepth == true} />
        </div>
      </div>
    </div>
  );
}
