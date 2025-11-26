import { products } from "../data/product";
import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {

    const [p1, p2, p3] = products;

    return (
        <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">

                <div className="w-full max-w-[380px] mx-auto">
                    <ProductCard product={p1} />
                </div>

                <div className="w-full max-w-[380px] mx-auto">
                    <ProductCard product={p2} />
                </div>

                <div className="md:col-span-2 flex justify-center w-full">
                    <div className="w-full max-w-[380px] mx-auto">
                        <ProductCard product={p3} />
                    </div>
                </div>
            </div>
        </div>
    );
};
