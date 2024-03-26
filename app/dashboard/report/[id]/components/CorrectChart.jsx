"use client";
import Chart from "react-apexcharts";

export function CorrectChartUsageExample({ answers, qa }) {
  let every = {};
  Object.keys(answers).map(function (key, index) {
    const correct =
      qa[qa.findIndex((x) => x.id === parseInt(key))][
        "choice" + qa.find((x) => x.id === parseInt(key)).answer
      ];
    const personal = qa.find((x) => x.id === parseInt(key))[
      "choice" + answers[key]
    ];
    const found = qa.find((x) => x.id === parseInt(key)).type;
    if (correct == personal) {
      every[found] = every[found] + 1;
    } else {
      every[found] = 1;
    }
  });
  return (
    <div className="w-full flex  print:break-inside-avoid flex-col justify-center  border border-gray-300 shadow-sm hover:shadow-md rounded-lg p-5">
      <h2 className="text-center text-lg mb-3 font-semibold">
        Correct Questions
      </h2>
      <Chart
        className="flex justify-center h-72 items-center"
        options={{
          labels: Object.keys(every),
          series: Object.keys(every),
          tooltip: { enabled: false },
          chart: {
            toolbar: {
              show: false,
            },
          },
        }}
        series={[
          {
            data: Object.values(every),
          },
        ]}
        type="bar"
        width="380"
      />
    </div>
  );
}
