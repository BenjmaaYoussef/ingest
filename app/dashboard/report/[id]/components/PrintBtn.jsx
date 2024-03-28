"use client";
export default function PrintBtn() {
  return (
    <button
      onClick={() => print()}
      className="bg-black px-4 py-2 items-center rounded-lg text-white w-full justify-center flex gap-3 hover:bg-gray-700 col-span-8 md:col-span-6"
    >
      <svg
        className="w-6 h-6 text-white dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h1v-4c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4c0 .6-.4 1-1 1H9Z"
          clipRule="evenodd"
        />
      </svg>
      Print report
    </button>
  );
}
