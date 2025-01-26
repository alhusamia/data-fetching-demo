import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDBPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-4">Posts</h2>
        <div className="space-y-4">
          {products.map((product: Product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                {product.title}
              </h3>
              <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                {product.price}
              </h3>
              <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                {product.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
