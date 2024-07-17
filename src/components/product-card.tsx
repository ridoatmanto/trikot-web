import { Link } from "react-router-dom";
import { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full rounded-lg lg:mb-0 bg-slate-50 dark:bg-slate-700">
      <div className="text-center text-slate-500 px-2 py-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
        <img
          src="./product-images/dortmund-jersey-home-2023-2024.png"
          alt={product.name}
          className="w-42"
        />
        <p className="text-md uppercase">{product.name}</p>
        <h2 className="font-bold text-xl">Rp {product.price}</h2>
        <Link to={`/detail/${product.id}`}>
          <button
            type="submit"
            className="mt-2 bg-[#AAAAAA] hover:bg-[#B6B6B6] rounded-lg px-1.5 py-1 text-white text-md"
          >
            <svg
              className="inline w-6 h-6 text-white"
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
        </Link>
      </div>
    </div>
  );
}
