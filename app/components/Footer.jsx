export default function Footer() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="mb-10 flex justify-center text-center pt-10 border-t border-gray-200 dark:border-gray-700">
        <div>
          <a
            className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            IQ Test Academy
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} - All rights reserved.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            <div className="space-x-4 text-sm ms-4">
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Terms
              </a>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mt-3 sm:hidden">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Brand
              </a>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                © 2022 Preline.
              </p>
            </div>
            {/* Social Brands */}
            <div className="space-x-4">
              <a
                className="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </div>
            {/* End Social Brands */}
          </div>
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
}
