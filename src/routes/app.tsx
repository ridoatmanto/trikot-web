import { ProductCard } from "../components/product-card.tsx";

export default function App() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-0 min-h-72">
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard />
      </div>
      <div className="mr-0 lg:mr-4 mb-4">
        <ProductCard />
      </div>
    </div>
  );
}
