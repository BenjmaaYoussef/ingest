export default function () {
  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-100 rounded-lg"
      id="help"
    >
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Have a Question? Get in Touch!
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Fill out the form below, and our team will get back to you as soon
            as possible.
          </p>
        </div>
        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16  ">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 bg-white">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Fill in the form
            </h2>
            <form>
              <div className="grid gap-4">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Details"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex  justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send inquiry
                </button>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          {/* End Card */}
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            <div className=" flex pl-7 gap-x-7 py-6 bg-white rounded-lg">
              <svg
                className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-gray-200"
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
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Contact us by email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  If you wish to write us an email instead please use
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  support@iqtest.com
                </a>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
      </div>
    </div>
  );
}
