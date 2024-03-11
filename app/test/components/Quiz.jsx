"use client";
import { useEffect, useState } from "react";
import Question from "./Question";
import Graphicalq from "./Graphicalq";
import { createClient } from "@/app/utils/client";
import { useRouter } from "next/navigation";
import { Timer, Time, TimerOptions } from "timer-node";

function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);
  const [startTs, setStartTs] = useState(0);
  const router = useRouter();
  const supabase = createClient();
  const finishTest = async () => {
    console.log(localStorage);
    const { data, error } = await supabase
      .from("tests")
      .insert({
        answers: (({ time, ...o }) => o)(localStorage),
        time_taken: localStorage["time"],
      })
      .select();
    if (data) {
      router.push("/getreport/" + data[0].id);
    }
  };
  const timer = new Timer({ label: "test-timer" });

  return (
    <div>
      {!start ? (
        <div>
          <div className="max-w">
            <div className="relative flexflex-col bg-white shadow-lg border-2 border-gray-200 rounded-xl dark:bg-gray-800">
              <div className="p-4 h-[25rem] justify-center flex flex-col items-center sm:p-10 text-center overflow-y-auto">
                {/* Icon */}
                <span className="mb-4 inline-flex justify-center items-center size-[46px] rounded-full border-4 border-green-50 bg-green-100 text-green-500 dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                  </svg>
                </span>
                {/* End Icon */}
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                  20 questions with increasing difficulty.
                </h3>
                <p className="text-gray-500">
                  Give the correct answer among the 4 options proposed
                </p>
                <div className="mt-6 flex justify-center gap-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStart(true);
                      timer.start();
                      setStartTs(timer._startTimestamp);
                      localStorage.clear();
                    }}
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border text-white border-gray-200 bg-blue-500 shadow-sm hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-task-created-alert"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : questions[index].type == "Graphical question" ? (
        <Graphicalq
          q={questions[index]}
          index={index}
          setIndex={setIndex}
          qlen={questions.length}
          finishTest={finishTest}
          timer={startTs}
        />
      ) : (
        <Question
          q={questions[index]}
          index={index}
          setIndex={setIndex}
          qlen={questions.length}
          finishTest={finishTest}
          timer={startTs}
        />
      )}
    </div>
  );
}

export default Quiz;
