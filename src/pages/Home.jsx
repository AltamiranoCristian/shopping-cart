import { ProductsList } from "@/components/ProductsList";
import { Suspense } from "react";
import { getProducts, getCategories } from "@/api/products/products";
import { Loading } from "./Loading";
export function Home() {
    const productsPromise = getProducts();
    const categoriesPromise = getCategories();
    return (
        <>
            <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex flex-col items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                    <span className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></span>
                    <span className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></span>
                    <span className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></span>
                </div>
                <article className="relative w-1/2 flex gap-6">
                    <div>
                        <h1 className="text-6xl mb-2">
                            <span className="bg-amber-400 rounded text-black transform:rotate-12">Find</span> Your Own <span className="text-cyan-300">Style</span>
                        </h1>
                        <p>Discover unique products that reflect your personality. From retro sneakers to vibrant accessories that will make you stand out anywhere.</p>
                    </div>
                    <div className="inset-4 overflow-hidden">
                        <span className="absolute top-20 lg:-top-20 -right-20 w-16 h-16 bg-green-300 rounded-full shadow-2xl animate-uptodown flex items-center justify-center">
                            <i className="pi pi-star text-2xl"></i>
                        </span>
                        <span className="absolute hidden xl:flex items-center justify-center top-40 right-20 w-64 h-64 bg-amber-300 rounded-full shadow-2xl animate-uptodown animation-delay-4000">
                            <i className="pi pi-bolt text-7xl"></i>
                        </span>
                    </div>
                </article>
                <div className="absolute bottom-0 lg:-bottom-1 left-0 right-0 animate-uptodown">
                    <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
                        <path
                            d="M0,120 L0,60 Q300,0 600,60 T1200,60 L1200,120 Z"
                            fill="white"
                            className="drop-shadow-lg"
                        />
                    </svg>
                </div>
            </section>
            <section className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 flex-1">
                <header className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-black mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                            Main&nbsp;
                        </span>
                        Products
                    </h1>
                </header>
                <Suspense fallback={<Loading />}>
                    <ProductsList productslist={productsPromise} categoriesList={categoriesPromise} />
                </Suspense>
            </section>
        </>
    )
}