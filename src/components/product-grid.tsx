import { Link } from "react-router-dom";
import { Product } from "../types";
import { currencyFormat } from "../libs/currency-format";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-0 min-h-72">
      {products.map((product) => (
        <div key={`key-${product.id}`} className="mr-0 lg:mr-4 mb-4">
          <div className="w-full rounded-lg lg:mb-0 bg-slate-50 dark:bg-slate-700 hover:dark:bg-slate-600 border border-slate-600 hover:dark:border-slate-400 text-center">
            <Link
              to={`/products/${product.slug}`}
              className="text-slate-500 dark:text-slate-400"
            >
              <img
                src={product.imageURL}
                alt={`${product.name}'s images`}
                className="w-42"
              />
              <h2 className="text-md uppercase px-2 lg:px-4 font-bold">
                {product.name}
              </h2>
              <p className="text-sm pb-2 lg:pb-4">
                {currencyFormat(product.price)}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
