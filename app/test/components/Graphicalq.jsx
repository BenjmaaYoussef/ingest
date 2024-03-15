"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Timer } from "timer-node";

export default function Graphicalq({
  q,
  index,
  setIndex,
  qlen,
  finishTest,
  timer,
}) {
  const [timerVal, setTimerVal] = useState("0:0");

  const [choice, setChoice] = useState(null);
  useEffect(() => {
    setInterval(() => {
      setTimerVal(new Timer({ startTimestamp: timer }).format("%m:%s"));
    }, 1000);
  });
  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 items-center">
          <div>Question</div>
          <div className="text-white bg-gray-800 w-6 rounded-md text-center">
            {index + 1}
          </div>
          <div>of</div>
          <div className="text-white bg-gray-800 w-8 rounded-md text-center">
            {qlen}
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
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
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div className="font-bold text-xl">{timerVal}</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1  gap-2">
        <div className="w-full flex-col h-full shadow-md flex items-center p-5 border border-gray-200 rounded-lg mb-6">
          <h2 className="text-2xl font-bold">{q.name}</h2>
          <Image
            width={300}
            height={300}
            src={q.question_image}
            alt=""
            className="w-full "
          />
        </div>
        <div className="flex flex-col gap-2">
          <div
            onClick={() => {
              setChoice(1);
            }}
            className={`w-full cursor-pointer gap-2 shadow-sm flex items-center p-5 border border-gray-200 rounded-lg ${
              choice == 1 && " bg-gray-200"
            }`}
          >
            <div className="border border-black w-8 h-8 flex justify-center items-center rounded-md">
              1
            </div>
            <h2 className="text-lg">
              {" "}
              <Image width={150} height={150} src={q.choice1} alt="" />{" "}
            </h2>
          </div>
          <div
            onClick={() => {
              setChoice(2);
            }}
            className={`w-full cursor-pointer gap-2 shadow-sm flex items-center p-5 border border-gray-200 rounded-lg ${
              choice == 2 && " bg-gray-200"
            }`}
          >
            <div className="border border-black w-8 h-8 flex justify-center items-center rounded-md">
              2
            </div>
            <h2 className="text-lg">
              <Image width={150} height={150} src={q.choice2} alt="" />
            </h2>
          </div>
          <div
            onClick={() => {
              setChoice(3);
            }}
            className={`w-full cursor-pointer gap-2 shadow-sm flex items-center p-5 border border-gray-200 rounded-lg ${
              choice == 3 && " bg-gray-200"
            }`}
          >
            <div className="border border-black w-8 h-8 flex justify-center items-center rounded-md">
              3
            </div>
            <h2 className="text-lg">
              <Image width={150} height={150} src={q.choice3} alt="" />
            </h2>
          </div>
          <div
            onClick={() => {
              setChoice(4);
            }}
            className={`w-full cursor-pointer gap-2 shadow-sm flex items-center p-5 border border-gray-200 rounded-lg ${
              choice == 4 && " bg-gray-200"
            }`}
          >
            <div className="border border-black w-8 h-8 flex justify-center items-center rounded-md">
              4
            </div>
            <h2 className="text-lg">
              <Image width={150} height={150} src={q.choice4} alt="" />
            </h2>
          </div>
          <div className="flex justify-center">
            {index + 1 !== qlen ? (
              <button
                type="button"
                disabled={choice == null}
                onClick={() => {
                  localStorage.setItem(q.id, choice);
                  setChoice(null);
                  setIndex(index + 1);
                }}
                className="disabled:bg-blue-300 mt-3 py-3 px-4 w-1/2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {" "}
                Next
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
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                disabled={choice == null}
                onClick={() => {
                  localStorage.setItem(q.id, choice);
                  localStorage.setItem("time", timerVal);
                  finishTest();
                }}
                className="disabled:bg-blue-300 mt-3 py-3 px-4 w-1/2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                {" "}
                Finish your test
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
