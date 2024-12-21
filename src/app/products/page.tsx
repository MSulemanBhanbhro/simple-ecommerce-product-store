import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Products = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);

  return (
   <>
   <h1 className='text-3xl font-bold text-center mt-20'>Our Popular Products</h1>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-[200px] w-[90%] mx-auto'>
    {
        data.map((product:any) => (
            <div key={product.id} className='bg-white p-4 rounded-lg shadow-md'>
                <Link href={`/products/${product.id}`}>
                <Image src={product.image} alt={product.title} width={400} height={400} className='w-full h-[70vh]  rounded-lg' />
                </Link>
                <h2 className='text-xl font-bold mt-2'>{product.title}</h2>
                <p className='text-gray-600 mt-2'>{product.description}</p>
                <p className='text-xl font-bold mt-2'>${product.price}</p>
            </div>
        ))
    }

   </div>

   </>
  )
}

export default Products