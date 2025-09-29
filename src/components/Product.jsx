import { use } from "react"
import { Image } from "primereact/image"
import { Button } from "primereact/button";
import { useCart } from "@/hooks/useCart";

export function Product({ productPromise }) {
    const details = use(productPromise);
    const { addItem } = useCart();

    return (
        <section className="text-gray-800 body-font overflow-hidden">
            <div className="container px-5 mx-auto">
                <article className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Image alt={details.title} className="lg:w-1/2 w-full lg:h-auto object-cover object-center" src={details.image} preview indicatorIcon={<i className="pi pi-search text-white"></i>} loading="lazy" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{details.category}</h2>
                        <h1 className="text-3xl title-font font-medium mb-1">{details.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <span>{[1,2,3,4,5].map(star => star <= details.rating.rate ? '⭐': '✖️')}</span>
                                <span className="ml-3">{details.rating.count} Reviews</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">{details.description}</p>
                        <div className="flex mt-6 items-center pt-5 border-t-1 border-gray-800 mb-5 space-x-2">
                            <span className="title-font font-medium text-2xl">${details.price}</span>
                            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-colors duration-300"  label="Add to Cart" icon='pi pi-shopping-cart' onClick={() => addItem(details)} />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
