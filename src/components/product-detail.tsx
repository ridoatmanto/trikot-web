import { useState } from "react";
import parse from "html-react-parser";
import { ShoppingCart, Info } from "lucide-react";

import { Product } from "../types";
import { currencyFormat } from "../libs/currency-format";
import { Quantity } from "./ui/quantity";
import { Size } from "./ui/size";

export function ProductDetail({ product }: { product: Product }) {
  const [cartNotification, setCartNotification] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const sizeClick = (choosenSize: string) => {
    setSize(choosenSize);
  };

  const addCartClick = () => {
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

          <div className="uppercase mt-4 block mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="mr-2">SIZE :</span>
            <Size currentValue={size} changeInputHandle={sizeClick} />
          </div>

          <div>
            <Quantity
              currentValue={quantity}
              reduceInputHandle={reduceQuantity}
              addInputHandle={addQuantity}
            />

            <button
              id="triggerElement"
              type="button"
              className="block mt-4 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-1.5 py-1 text-gray-800 text-md"
              onClick={() => addCartClick()}
            >
              <ShoppingCart className="inline w-6 h-6 text-gray-800 mr-2" />
              Add to cart
            </button>
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
