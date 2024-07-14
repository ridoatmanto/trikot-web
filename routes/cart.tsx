export function Cart() {
  return (
    <div className="text-slate-500 dark:text-slate-400 pl-8 pr-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Your Cart</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="../src/assets/product-images/dortmund-jersey-home-2023-2024.png"
                  alt="BVB Trikot Logo"
                  className="h-36 float-left mr-2"
                />
                <p className="mt-4 font-2xl uppercase">
                  BORUSSIA DORTMUND HOME JERSEY
                </p>
                <p className="font-medium uppercase">SIZE: XL</p>
                <p className="font-medium uppercase">
                  QUANTITY: 2 x Rp 150.000
                </p>
              </th>
              <td className="px-6 py-4">Rp 300.000</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src="../src/assets/product-images/dortmund-short-2023-2024.png"
                  alt="BVB Trikot Logo"
                  className="h-36 float-left mr-2"
                />
                <p className="mt-4 font-2xl uppercase">
                  BORUSSIA DORTMUND SHORT JERSEY
                </p>
                <p className="font-medium uppercase">SIZE: XL</p>
                <p className="font-medium uppercase">
                  QUANTITY: 2 x Rp 175.000
                </p>
              </th>
              <td className="px-6 py-4">Rp 350.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-semibold text-right mt-2 mb-8 mr-4">
        Total Payment: Rp. 650.000,-
      </h2>
    </div>
  );
}
