export function ProductDetail() {
  return (
    <div className="max-w-2xl grid grid-cols-1 lg:grid-cols-2 lg:mx-0 min-h-72">
      <div className="mr-0 lg:mr-4 mb-4">
        <div
          className={"w-full rounded-lg lg:mb-0 bg-slate-50 dark:bg-slate-700 "}
        >
          <div className="text-center text-slate-500 px-2 py-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
            <img
              src="./product-images/dortmund-jersey-home-2023-2024.png"
              alt="BVB Trikot Logo"
              className="w-42"
            />
          </div>
        </div>
      </div>

      <div className="mr-0 lg:mr-4 mb-4 text-slate-500 px-2 py-2 dark:text-slate-400">
        <p className="text-2xl uppercase font-bold">
          BORUSSIA DORTMUND HOME JERSEY
        </p>
        <h2 className="font-bold text-xl">Rp 150.000</h2>
        <p className="text-sm uppercase mt-2">SIZE AVAILABLE</p>
        <button
          type="button"
          className="mt-2 mr-2 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-2 py-1 text-gray-800 hover:text-white text-md"
        >
          XS
        </button>
        <button
          type="button"
          className="mt-2 mr-2 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-2 py-1 text-gray-800 hover:text-white text-md"
        >
          S
        </button>
        <button
          type="button"
          className="mt-2 mr-2 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-2 py-1 text-gray-800 hover:text-white text-md"
        >
          M
        </button>
        <button
          type="button"
          className="mt-2 mr-2 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-2 py-1 text-gray-800 hover:text-white text-md"
        >
          XL
        </button>

        <form className="max-w-xs mx-auto mt-2">
          <label
            htmlFor="quantity-input"
            className="block mb-2 text-sm font-medium text-slate-500 dark:text-slate-400"
          >
            QUANTITY:
          </label>
          <div className="relative flex items-center max-w-[8rem]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                className="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </form>

        <button
          type="button"
          className="block mt-4 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-1.5 py-1 text-gray-800 hover:text-white text-md"
        >
          <svg
            className="inline w-6 h-6 text-gray-800 hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
            />
          </svg>
          Add to cart
        </button>
      </div>
      <div className="col-span-2 text-slate-500 dark:text-slate-400 font-semibold">
        DESCRIPTIONS:
      </div>
      <div className="mr-0 lg:mr-4 mb-4 col-span-2 text-slate-500 px-2 py-2 dark:text-slate-400 flex items-center justify-center">
        <ul className="list-disc block">
          <li>From kit supplier PUMA</li>
          <li>Puma cat and BVB emblem on the chest</li>
          <li>
            100% polyester 95 % recycled polyester thanks to Puma's RE:FIBRE
            process
          </li>
          <li>Flocked jerseys are delivered with GLS logo.</li>
        </ul>
      </div>
    </div>
  );
}
