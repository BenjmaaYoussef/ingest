export default function Report({ answers, qa, show }) {
  return show ? (
    <table className={`w-full ${!show && " blur-lg bg-gray-100"}`}>
      <thead className="border-b-4 border-gray-300">
        <tr>
          <td className="py-4">No.</td>
          <td className="py-4">Question & Correct Answer</td>
          <td className="py-4">Your answer</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(answers).map(function (key, index) {
          const correct =
            qa[qa.findIndex((x) => x.id === parseInt(key))][
              "choice" + qa.find((x) => x.id === parseInt(key)).answer
            ];
          const personal = qa.find((x) => x.id === parseInt(key))[
            "choice" + answers[key]
          ];
          return (
            <tr className="hover:bg-gray-50 border-b-2 border-gray-300 my-4">
              <td>{index + 1}</td>
              <td className="py-1">
                <div className="text-gray-500 font-bold">
                  {qa.find((x) => x.id === parseInt(key)).name}
                </div>
                <hr className="my-1 mr-4" />
                <div>
                  {qa.find((x) => x.id === parseInt(key)).question_image ? (
                    <img src={correct} alt="" />
                  ) : (
                    correct
                  )}
                </div>
              </td>
              <td>
                {qa.find((x) => x.id === parseInt(key)).question_image ? (
                  <img src={personal} alt="" />
                ) : (
                  personal
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <div className="w-full border border-gray-300 shadow-sm hover:shadow-md rounded-lg p-5 mt-5">
      <div className="w-full flex flex-col justify-between items-center">
        <svg
          className="w-12 h-12 text-blue-600 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={60}
          height={60}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-lg font-bold">In-Depth report is locked</h2>
        <p className="text-center">
          Your selected plan doesn't include this feature
        </p>
      </div>
    </div>
  );
}
