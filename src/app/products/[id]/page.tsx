import Image from 'next/image';

// Function to generate static parameters for dynamic routes
export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return products.map((product: any) => ({
    id: product.id.toString(),
  }));
}

// Dynamic page component to display product details
const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="container mx-auto p-4">
      <section className="text-gray-800 body-font overflow-hidden bg-gray-50 shadow-md rounded-lg">
        <div className="container px-5 py-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            <Image
              alt={product.title}
              className="lg:w-1/2 w-full lg:h-[85vh] h-64 object-contain rounded-lg border"
              src={product.image}
              width={500}
              height={500}
            />
            {/* Product Details */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col md:items-start justify-center md:text-left items-center text-center">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                Brand Name
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-bold mb-4">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      className="w-5 h-5 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">(4 Reviews)</span>
                </span>
              </div>
              <p className="leading-relaxed text-gray-700 mb-4">
                {product.description}
              </p>
              <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 font-medium text-gray-700">Color</span>
                  <button className="border-2 border-gray-300 w-6 h-6 rounded-full bg-red-500 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-2 w-6 h-6 rounded-full bg-green-500 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-2 w-6 h-6 rounded-full bg-blue-500 focus:outline-none" />
                </div>
                <div className="flex items-center ml-6">
                  <span className="mr-3 font-medium text-gray-700">Size</span>
                  <select className="rounded border border-gray-300 py-2 text-base pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
              <div className="flex  items-center gap-4 mt-4">
                <span className="title-font font-bold text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button className="ml-auto text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none py-2 px-6 rounded-lg">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-600 ml-4">
                  <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
