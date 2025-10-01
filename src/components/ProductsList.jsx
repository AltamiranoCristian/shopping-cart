'use client'
import { use, useState, useEffect } from "react";
import { Link } from "react-router";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown"
import { useCart } from "@/hooks/useCart"
import { getProductsByCategory } from "../api/products/products";

export function ProductsList({ productslist, categoriesList }) {
    const products = use(productslist);
    const categories = use(categoriesList);
    const [categorySelected, setCategorySelected] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const { addItem } = useCart();

    useEffect(() => {
        (async () => {
            if (categorySelected) {
                try {
                    const response = await getProductsByCategory(categorySelected);
                    setFilteredProducts(response)
                } catch (error) {
                    console.error(error)
                }
            } else setFilteredProducts(products)
        })();
    }, [categorySelected, products])


    if (filteredProducts.length > 0) return (
        <>
            <section className="flex justify-end shadow-lg p-4 rounded-xl">
                <Dropdown value={categorySelected} onChange={(e) => setCategorySelected(e.value)} options={categories} className="py-2 px-1 w-full  md:w-1/3 lg:w-1/5 flex items-center [&_svg]:top-3" panelClassName="[&_span]:py-2 [&_span]:px-4" placeholder="Category" showClear />
            </section>
            <section className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-stretch'>
                {filteredProducts.map((product) => (
                    <article key={product.id} className="group relative flex flex-col justify-between shadow-lg p-2 rounded-xl">
                        <Link to={`/products/${product.id}`}>
                            <img src={product.image} alt={product.title} className="aspect-square w-full rounded-md object-cover lg:aspect-auto lg:h-80 group-hover:scale-104 hover:cursor-pointer transition-all duration-300" loading="lazy" />
                        </Link>
                        <section className="mt-4 flex justify-between">
                            <h2 className="font-bold line-clamp-2 cursor-pointer group-hover:text-purple-600 transition-colors duration-300">{product.title}</h2>
                            <span className="font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">${product.price}</span>
                        </section>
                        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-300" label="Add to Cart" icon='pi pi-shopping-cart' onClick={() => addItem(product)} />
                    </article>
                ))}
            </section>
        </>
    );
    else return (
        <section className="h-screen flex items-center">
            Error
        </section>
    )
}
