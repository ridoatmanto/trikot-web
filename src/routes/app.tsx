import { useLoaderData } from "react-router-dom";
import { ProductCard } from "../components/product-card.tsx";

import { Product } from "../types";

export async function loader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Product[] = await response.json();
  console.log("products", products);
  return { products };
}

export function AppRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-0 min-h-72">
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard product={products[0]} />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard product={products[1]} />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard product={products[2]} />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard product={products[3]} />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard product={products[4]} />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard product={products[5]} />
      </div>
    </div>
  );
}
