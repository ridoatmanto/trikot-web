import { Link } from "react-router-dom";
import { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-full rounded-lg lg:mb-0 bg-slate-50 dark:bg-slate-700">
      <div className="text-center px-2 py-2 dark:text-slate-400 border-b-1 border-dashed border-slate-100 dark:border-slate-50">
        <Link
          to={`/detail/${product.id}`}
          className="text-slate-500 dark:text-slate-400"
        >
          <img
            src={`./product-images/${product.image}`}
            alt={product.name}
            className="w-42"
          />
          <p className="text-md uppercase">{product.name}</p>
          <h2 className="font-bold text-xl">Rp {product.price}</h2>
        </Link>
      </div>
    </div>
  );
}
