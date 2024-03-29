export default function Accuracy({ value, show }) {
  return show ? (
    <div
      className={`w-full border border-gray-300 shadow-sm hover:shadow-md rounded-lg p-5 ${
        !show && "blur"
      }`}
    >
      <div className="w-full flex justify-between items-center ">
        <h4 className="font-bold text-xl">Accuracy</h4>
        <div className="justify-center flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 122.87 122.88"
            style={{ enableBackground: "new 0 0 122.87 122.88" }}
            className="w-6 h-6"
            xmlSpace="preserve"
          >
            <g>
              <path d="M52.01,110.22c-9.96-1.91-18.86-6.79-25.76-13.68c-6.9-6.9-11.77-15.8-13.68-25.77h6.21c1.82,8.28,5.99,15.68,11.78,21.47 c5.78,5.78,13.18,9.95,21.46,11.78V110.22L52.01,110.22z M96.31,64.48c-1.68,0-3.04-1.36-3.04-3.04c0-1.68,1.36-3.04,3.04-3.04 h23.52c1.68,0,3.04,1.36,3.04,3.04c0,1.68-1.36,3.04-3.04,3.04H96.31L96.31,64.48L96.31,64.48z M64.48,26.57 c0,1.68-1.36,3.04-3.04,3.04c-1.68,0-3.04-1.36-3.04-3.04V3.04C58.4,1.36,59.76,0,61.44,0c1.68,0,3.04,1.36,3.04,3.04V26.57 L64.48,26.57L64.48,26.57z M64.48,119.84c0,1.68-1.36,3.04-3.04,3.04c-1.68,0-3.04-1.36-3.04-3.04V96.31c0-4,6.08-4,6.08,0V119.84 L64.48,119.84L64.48,119.84z M3.04,64.48C1.36,64.48,0,63.12,0,61.44c0-1.68,1.36-3.04,3.04-3.04h23.52c1.68,0,3.04,1.36,3.04,3.04 c0,1.68-1.36,3.04-3.04,3.04H3.04L3.04,64.48L3.04,64.48z M61.43,46.94c8.01,0,14.5,6.49,14.5,14.5c0,8.01-6.49,14.5-14.5,14.5 c-8.01,0-14.5-6.49-14.5-14.5C46.94,53.43,53.43,46.94,61.43,46.94L61.43,46.94z M12.56,51.92c1.91-9.96,6.79-18.86,13.68-25.76 c6.9-6.9,15.8-11.78,25.77-13.69v6.22c-8.28,1.82-15.68,5.99-21.47,11.78c-5.78,5.78-9.96,13.17-11.77,21.45H12.56L12.56,51.92z M70.86,12.46c9.97,1.91,18.87,6.79,25.77,13.69c6.9,6.89,11.78,15.81,13.68,25.77h-6.21c-1.82-8.28-5.99-15.69-11.78-21.47 c-5.78-5.79-13.18-9.96-21.46-11.78V12.46L70.86,12.46z M110.32,70.77c-1.91,9.96-6.79,18.87-13.69,25.77 c-6.9,6.9-15.8,11.78-25.77,13.69v-6.21c16.55-3.64,29.62-16.69,33.25-33.25H110.32L110.32,70.77z" />
            </g>
          </svg>

          <div className="w-full flex items-center justify-center h-full text-3xl font-bold ">
            {show ? value.toFixed(2) : "12"}%
          </div>
        </div>
      </div>
    </div>
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
        <h2 className="text-lg font-bold">Detailed metrics are locked</h2>
        <p className="text-center">
          Your selected plan doesn't include this feature
        </p>
      </div>
    </div>
  );
}
