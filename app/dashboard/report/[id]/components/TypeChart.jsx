"use client";

import Chart from "react-apexcharts";

export function DonutChartUsageExample({ answers, qa }) {
  let types = [];
  let series = [];
  let every = {};
  Object.keys(answers).map(function (key, index) {
    const found = qa.find((x) => x.id === parseInt(key)).type;
    if (every[found]) {
      every[found] = every[found] + 1;
    } else {
      every[found] = 1;
    }
  });
  return (
    <div className="w-full flex flex-col justify-center  border border-gray-300 shadow-sm hover:shadow-md rounded-lg p-5">
      <h2 className="text-center text-lg mb-3 font-semibold">
        Questions Types
      </h2>

      <Chart
        className="flex justify-center h-72 items-center"
        options={{ labels: Object.keys(every) }}
        series={Object.values(every)}
        type="donut"
        width="380"
      />
    </div>
  );
}
