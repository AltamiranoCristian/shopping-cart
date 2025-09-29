import { ProductsList } from "@/components/ProductsList";
import { Suspense } from "react";
import { getProducts } from "@/api/products/products";
import { Loading } from "./Loading";
export function Home() {
    const productsPromise = getProducts();
    return (
        <>
            <section className="relative h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex flex-col items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                    <span className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></span>
                    <span className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></span>
                    <span className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></span>
                </div>
                <article className="relative w-1/2 flex gap-6">
                    <div>
                        <h1 className="text-6xl mb-4">
                            <span className="bg-amber-400 rounded text-black">Find</span> Your Own <span className="text-cyan-300">Style</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magnam facere delectus ad similique doloribus assumenda, earum laboriosam, aspernatur repellendus at temporibus dolore repellat! Quibusdam distinctio quas optio nobis quidem?</p>
                    </div>
                    <div className="inset-4 overflow-hidden">
                        <span className="absolute -top-20 -right-20 w-16 h-16 bg-green-300 rounded-full shadow-2xl animate-uptodown flex items-center justify-center">
                            <i className="pi pi-star text-2xl"></i>
                        </span>
                        <span className="absolute top-40 right-20 w-64 h-64 bg-amber-300 rounded-full shadow-2xl animate-uptodown animation-delay-4000 flex items-center justify-center">
                            <i className="pi pi-bolt text-7xl"></i>
                        </span>
                    </div>
                </article>
            </section>
            <section className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 flex-1">
                <Suspense fallback={<Loading />}>
                    <ProductsList productslist={productsPromise} />
                </Suspense>
            </section>
        </>
    )
}