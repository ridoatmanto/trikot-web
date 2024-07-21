import { useState } from "react";
import parse from "html-react-parser";

import { Product } from "../types";
import { currencyFormat } from "../libs/currency-format";
import { Quantity } from "./ui/quantity";
import { Size } from "./ui/size";

export function ProductDetail({ product }: { product: Product }) {
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
    const newCart = {
      product_id: product.id,
      quantity: quantity,
      size: size,
    };
    console.log("newCART ", newCart);
  };

  return (
    <div className="max-w-2xl grid grid-cols-1 lg:grid-cols-2 lg:mx-0 min-h-72">
      <div className="mr-0 lg:mr-4 mb-4">
        <div className="w-full rounded-lg lg:mb-0 bg-slate-50 dark:bg-slate-700 text-center text-slate-500 px-2 py-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
          <img
            src={product.imageURL}
            alt={`${product.name}'s images`}
            className="w-42"
          />
        </div>
      </div>

      <div className="mr-0 lg:mr-4 mb-4 text-slate-500 px-2 py-2 dark:text-slate-400">
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
            type="button"
            className="block mt-4 bg-[#D9D9D9] hover:bg-slate-400 rounded-lg px-1.5 py-1 text-gray-800 text-md"
            onClick={() => addCartClick()}
          >
            <svg
              className="inline w-6 h-6 text-gray-800"
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
  );
}
