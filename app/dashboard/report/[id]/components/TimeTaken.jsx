export default function TimeTaken({ value, show }) {
  return (
    show && (
      <div
        className={`w-full border border-gray-300 shadow-sm hover:shadow-md rounded-lg p-5 ${
          !show && "blur"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <h4 className="font-bold text-xl">Time taken</h4>
          <div className="justify-center flex flex-col items-center gap-1">
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

            <div className="w-full flex items-center justify-center h-full text-3xl font-bold ">
              {show ? value : "12"}s
            </div>
          </div>
        </div>
      </div>
    )
  );
}
