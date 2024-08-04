import { useState } from "react";
import { redirect, useLoaderData } from "react-router-dom";

import { currencyFormat } from "../libs/currency-format";

import { Cart, CartItem } from "../types";
import { BACKEND_API_URL } from "../libs/env";
import { auth } from "../libs/auth";
import { Trash2, CircleX } from "lucide-react";
import { useCookies } from "react-cookie";

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
  const [cookies, setCookie] = useCookies(["cart-count"]);

  const removeCartItemClick = async (cartItemId: { cartItemId: string }) => {
    await auth.checkUser();
    if (!auth.isAuthenticated) return redirect("/login");

    const itemResponse = await fetch(
      `${BACKEND_API_URL}/cartItems/${cartItemId}`,
      {
        headers: { Authorization: `Bearer ${auth.getToken()}` },
      }
    );

    const cartItem: CartItem = await itemResponse.json();
    console.log("cartItem", cartItem);

    const response = await fetch(`${BACKEND_API_URL}/carts/${cartItemId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.getToken()}` },
    });

    await response.json();

    const result = await loader();
    setData(result);

    setCookie("cart-count", cookies["cart-count"] - cartItem.cartItem.quantity);
  };

  const emptyCartClick = async () => {
    await auth.checkUser();
    if (!auth.isAuthenticated) return redirect("/login");

    const response = await fetch(`${BACKEND_API_URL}/carts`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${auth.getToken()}` },
    });

    const cart: Cart = await response.json();
    console.log("deleted cart", cart);
    const result = await loader();
    setData(result);
    setCookie("cart-count", 0);
  };

  if (data instanceof Response) return null;

  return (
    <div className="text-slate-500 dark:text-slate-400 pl-8 pr-8">
      <h2 className="text-2xl font-semibold text-center">Your Cart</h2>
      {data.cart.cart.items.length === 0 && (
        <p className=" text-center">No cart item exists!</p>
      )}
      {data.cart.cart.items.length > 0 && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg pb-4 lg:pb-8">
          <button
            id="triggerElement"
            type="button"
            className="float-right text-sm mb-2 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-1.5 py-1 text-gray-800 text-md"
            onClick={() => emptyCartClick()}
          >
            <Trash2 className="inline w-4 h-4 text-gray-800 mr-1 -mt-1" />
            Empty Cart
          </button>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Name
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
              {data.cart.cart.items.map((item: any) => (
                <tr
                  key={`cart-key-${item.product.id}`}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
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
                      <CircleX className="inline w-4 h-4 text-gray-800 mr-1 -mt-1" />
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="text-right bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4" colSpan={3}>
                  <h2 className="text-xl font-semibold mr-8">
                    Total Cart: {currencyFormat(data.cart.cart.totalCartPrice)}
                  </h2>
                  {/* <Link to="/order">
                    <button
                      type="submit"
                      className="w-1/2 mt-2 bg-[#AAAAAA] hover:bg-[#B6B6B6] rounded-lg px-1.5 py-1 text-white text-xl"
                    >
                      <svg
                        className="inline w-6 h-6 text-white -mt-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="36"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
                        />
                      </svg>
                      Order Now
                    </button>
                  </Link> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
