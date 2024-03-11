export default function Faq() {
  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      id="faq"
    >
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
      </div>
      {/* End Title */}
      <div className="max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              How long does it take to complete the IQ test?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              On average, our IQ test takes approximately 30-45 minutes to
              complete, though you can take it at your own pace.
            </p>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Are the test results accurate?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, our tests are designed by experts and undergo rigorous
              validation to ensure accuracy and reliability.
            </p>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Can I retake the test?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, you can retake the test at any time to track your progress
              and see how your cognitive abilities evolve over time.
            </p>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Can I access my test results at a later time?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, your test results will be securely stored in your account for
              future reference.
            </p>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Are there any age restrictions for taking the IQ test
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our IQ test is suitable for individuals aged 16 and above.
            </p>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Will my personal information be kept confidential?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Absolutely. We prioritize the privacy and security of our users'
              data. Your personal information and test results will be kept
              confidential
            </p>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
}
