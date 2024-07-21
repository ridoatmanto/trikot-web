import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { ProductDetail } from "../components/product-detail.tsx";

import { Product } from "../types";
export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug;

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${slug}`
  );
  const product: Product = await response.json();

  return { product };
}

export function ProductDetailRoute() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!product.name) {
    return (
      <div className="flex flex-row justify-center items-center">
        Product doesn't exists!
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-center">
      <ProductDetail product={product} />
    </div>
  );
}
