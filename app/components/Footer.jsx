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
          {/* End Col */}
        </div>
      </div>
    </footer>
  );
}
