import { Suspense } from "react";
import { useParams } from "react-router"
import { getProduct } from "@/api/products/products";
import { Loading } from "./Loading";
import { Product } from "@/components/Product";
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { NotFound } from "@/pages/NotFound"
export function ProductDetails() {
    const { id } = useParams();
    const productPromise = getProduct(id);
    return (
        <section className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 flex-1">
            <ErrorBoundary fallback={<NotFound message='Product not found' />}>
                <Suspense fallback={<Loading />}>
                    <Product productPromise={productPromise} />
                </Suspense>
            </ErrorBoundary>
        </section>
    )
}
