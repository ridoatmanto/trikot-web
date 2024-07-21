import { useLoaderData } from "react-router-dom";
import { ProductGrid } from "../components/product-grid.tsx";

import { Product } from "../types";

export async function loader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`
  );
  const products: Product[] = await response.json();
  return { products };
}

export function ProductsRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return <ProductGrid products={products} />;
}
