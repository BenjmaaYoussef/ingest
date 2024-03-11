export default function HowItWorks() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-100 rounded-lg">
      <div className="grid sm:grid-cols-3 lg:grid-cols-3 items-center gap-2">
        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white font-bold">
            1
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
              Sign Up for Your Test
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Create an account and choose the IQ test that suits your needs.
            </p>
          </div>
        </a>
        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white font-bold">
            2
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
              Complete the Test
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Do your best to answer the questions honestly. Sit back and let
              our algorithms do the rest.
            </p>
          </div>
        </a>
        {/* Icon Block */}
        <a
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl text-white font-bold">
            3
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">
              Receive Your Results
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Get instant access to your comprehensive test results and detailed
              analysis.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
