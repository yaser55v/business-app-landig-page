import React from "react"

const Newsletter = () => {
  return (
    <section className="bg-v-bink">
      <div className="max-w-3xl px-6 py-16 mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Newsletter
        </h1>
        <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
          aliquam arcu lacus.
        </p>

        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-evenly  sm:-mx-2">
          <input
            id="email"
            type="text"
            className="block w-3/4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Email Address"
          />

          <button
            href="/"
            className="inline-flex uppercase items-center justify-center h-11 w-32 px-6 bg-bink-108 font-medium text-xs tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-opacity-75 focus:shadow-outline focus:outline-none"
            aria-label="Subscribe"
            title="Subscribe"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
