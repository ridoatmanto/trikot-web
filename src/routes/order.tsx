export function Order() {
  return (
    <div className="text-slate-500 dark:text-slate-400 pl-8 pr-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Order List
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              All order below is your all time order history.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Code
              </th>
              <th scope="col" className="px-6 py-3">
                Product Item
              </th>
              <th scope="col" className="px-6 py-3">
                Total Order
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">ABCGDH</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <ul className="list-disc">
                  <li className="mb-4">
                    <b>Apple MacBook Pro 17"</b>
                    <p>2 x Rp 150.000</p>
                    <i>Sub Total: Rp 300.000</i>
                  </li>
                  <li>
                    <b>Windows MacBook Pro 17"</b>
                    <p>2 x Rp 150.000</p>
                    <i>Sub Total: Rp 300.000</i>
                  </li>
                </ul>
              </th>
              <td className="px-6 py-4">Rp 365.000</td>
              <td className="px-6 py-4">July 11, 2024</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">DYRUET</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <ul className="list-disc">
                  <li className="mb-4">
                    <b>Apple MacBook Pro 17"</b>
                    <p>2 x Rp 150.000</p>
                    <i>Sub Total: Rp 300.000</i>
                  </li>
                  <li>
                    <b>Windows MacBook Pro 17"</b>
                    <p>2 x Rp 150.000</p>
                    <i>Sub Total: Rp 300.000</i>
                  </li>
                </ul>
              </th>
              <td className="px-6 py-4">Rp 345.000</td>
              <td className="px-6 py-4">May 17, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
