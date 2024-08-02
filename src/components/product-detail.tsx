import { useState } from "react";
import parse from "html-react-parser";
import { redirect } from "react-router-dom";

import { ShoppingCart, Info } from "lucide-react";

import { Product, Cart } from "../types";

import { currencyFormat } from "../libs/currency-format";
import { auth } from "../libs/auth";
import { BACKEND_API_URL } from "../libs/env";

export function ProductDetail({ product }: { product: Product }) {
  const [cartNotification, setCartNotification] = useState(false);

  const addCartClick = async () => {
    await auth.checkUser();
    console.log("auth.isAuthenticated", auth.isAuthenticated);
    if (!auth.isAuthenticated) return redirect("/login");

    const user = await auth.checkUser();
    const cartItem = {
      productId: product.id,
      userId: user.id,
      quantity: 1,
    };

    const response = await fetch(`${BACKEND_API_URL}/carts`, {
      method: "POST",
      body: JSON.stringify(cartItem),
      headers: {
        Authorization: `Bearer ${auth.getToken()}`,
        "Content-Type": "application/json",
      },
    });

    const cart: Cart = await response.json();
    console.log(cart);
    setCartNotification(true);
    setTimeout(() => setCartNotification(false), 5000);
  };

  return (
    <div>
      <div className="max-w-2xl grid grid-cols-1 lg:grid-cols-2 lg:mx-0 min-h-72">
        <div className="mr-0 lg:mr-4 mb-4">
          <div className="w-full rounded-lg mb-4 bg-slate-50 dark:bg-slate-700 text-center text-slate-500 p-x dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
            <img
              src={product.imageURL}
              alt={`${product.name}'s images`}
              className="w-42"
            />
          </div>
        </div>
        <div className="mr-0 lg:mr-4 mb-4 text-slate-500 px-2 pb-2 dark:text-slate-400">
          <h2 className="text-2xl uppercase font-bold">{product.name}</h2>
          <p className="font-bold text-xl">{currencyFormat(product.price)}</p>
          <div>
            {/* {!user && <p className="mt-4">*Please login before add to cart!</p>} */}
            {/* {user && ( */}
            <button
              id="triggerElement"
              type="button"
              className="block mt-4 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-1.5 py-1 text-gray-800 text-md"
              onClick={() => addCartClick()}
            >
              <ShoppingCart className="inline w-6 h-6 text-gray-800 mr-2" />
              Add to cart
            </button>
            {/* )} */}
            {cartNotification ? (
              <div
                className="flex items-center mt-2 p-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-600 dark:text-green-400"
                role="alert"
              >
                <Info className="mr-2" />
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Success!</span> Add product to
                  cart.
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="col-span-2 description">
          <span className="text-slate-500 dark:text-slate-400 font-semibold">
            DESCRIPTIONS:
          </span>
          <div className="ml-2 mr-0 lg:mr-4 mb-4 col-span-2 text-slate-500 px-2 py-2 dark:text-slate-400">
            {parse(product.description)}
          </div>
        </div>
      </div>
    </div>
  );
}
