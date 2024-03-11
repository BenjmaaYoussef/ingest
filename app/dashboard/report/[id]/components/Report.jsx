export default function Report({ answers, qa, show }) {
  return (
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
  );
}
