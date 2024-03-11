export default function Results({ value }) {
  return (
    <div className="w-full border border-gray-300 shadow-sm hover:shadow-md rounded-lg p-5">
      <div className="w-full flex justify-between items-center">
        <h4 className="font-bold text-xl">Result</h4>
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
              strokeWidth={2}
              d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z"
            />
          </svg>
          <div className="w-full flex items-center justify-center h-full text-3xl font-bold ">
            {value} IQ
          </div>
        </div>
      </div>
    </div>
  );
}
