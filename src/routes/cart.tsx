import { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { currencyFormat } from "../libs/currency-format";

import { Cart } from "../types";
import { BACKEND_API_URL } from "../libs/env";
import { auth } from "../libs/auth";
import { Trash2 } from "lucide-react";

export async function loader() {
  await auth.checkUser();
  if (!auth.isAuthenticated) return redirect("/login");

  const response = await fetch(`${BACKEND_API_URL}/carts`, {
    headers: { Authorization: `Bearer ${auth.getToken()}` },
  });

  const cart: Cart = await response.json();

  return { cart };
}

export function CartRoute() {
  const result = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const [data, setData] = useState(result);

  const removeCartItemClick = async (cartItemId: { cartItemId: string }) => {
    await auth.checkUser();
    if (!auth.isAuthenticated) return redirect("/login");

    const response = await fetch(`${BACKEND_API_URL}/carts/${cartItemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.getToken()}` },
    });

    const cart: Cart = await response.json();
    console.log("deleted cart", cart);
    const result = await loader();
    setData(result);
  };

  if (data instanceof Response) return null;

  return (
    <div className="text-slate-500 dark:text-slate-400 pl-8 pr-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Your Cart</h2>
      {data.cart.cart.items.length === 0 && (
        <p className=" text-center">No cart item exists!</p>
      )}
      {data.cart.cart.items.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4 lg:pb-8">
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
                  Sub Total Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.cart.cart.items.map((item) => (
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
                      src={item.product.imageURL}
                      alt="BVB Trikot Logo"
                      className="h-36 float-left mr-2"
                    />
                    <p className="mt-4 font-2xl uppercase">
                      {item.product.name}
                    </p>
                    {/* <p className="font-medium uppercase">SIZE: XL</p> */}
                    <p className="font-medium uppercase">
                      QUANTITY: {item.quantity} x{" "}
                      {currencyFormat(item.product.price)}
                    </p>
                  </th>
                  <td className="px-6 py-4">
                    {currencyFormat(item.quantity * item.product.price)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      id="triggerElement"
                      type="button"
                      className="block mt-4 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-1.5 py-1 text-gray-800 text-md"
                      onClick={() => removeCartItemClick(item.id)}
                    >
                      <Trash2 className="inline w-6 h-6 text-gray-800 mr-2" />
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
