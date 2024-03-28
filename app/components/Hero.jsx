import Link from "next/link";

export default function Hero() {
  const d = new Date();
  return (
    <div className="relative z-10">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="max-w-2xl text-center mx-auto">
          <div className="bg-gray-100 py-2 rounded-full flex gap-3 items-center justify-center text-sm font-medium ">
            <div className="dot"></div>
            {(
              d.getHours() +
              d.getMinutes() +
              parseInt(Math.random() * 10)
            ).toString()}{" "}
            people are taking the test right now
          </div>
          {/* Title */}
          <div className="mt-5 max-w-2xl">
            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Unlock Your True Potential with Premium IQ Tests
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover Your Cognitive Abilities and Elevate Your Mind
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <Link
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/test"
            >
              Start Your IQ Test Now
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
          {/* End Buttons */}
        </div>
      </div>
    </div>
  );
}
