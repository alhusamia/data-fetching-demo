import { getProducts } from "@/prisma-db";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductDBPage() {
  const products: Product[] = await getProducts();
  console.log(products);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Products Database
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-6 transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                {product.title}
              </h3>
              <div className="space-y-3">
                <p className="text-2xl font-semibold text-indigo-600">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  {product.description || "No description available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
