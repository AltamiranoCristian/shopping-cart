'use client'
import { use } from "react";
import { Link } from "react-router";
import { Button } from "primereact/button";
import { useCart } from "@/hooks/useCart"

export function ProductsList({productslist}) {
    const products = use(productslist);
    const { addItem } = useCart();
    if(products.length > 0) return (
        <>
            <header className="text-center mb-12">
                <h1 className="text-3xl lg:text-4xl font-black mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                        Main&nbsp;
                    </span>
                    Products
                </h1>
            </header>
            <section className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-stretch'>
                {products.map((product) => (
                    <article key={product.id} className="group relative flex flex-col justify-between shadow-lg p-2 rounded-xl">
                        <Link to={`/products/${product.id}`} className="">
                        <img src={product.image} alt={product.title} className="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80 group-hover:scale-104 hover:cursor-pointer transition-all duration-300" />
                        </Link>
                        <section className="mt-4 flex justify-between">
                            <h2 className="font-bold line-clamp-2 cursor-pointer group-hover:text-purple-600 transition-colors duration-300">{product.title}</h2>
                            <span className="font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">${product.price}</span>
                        </section>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-300"  label="Add to Cart" icon='pi pi-shopping-cart' onClick={() => addItem(product)} />
                    </article>
                ))}
            </section>
        </>
    );
}
