import { products } from "../data/product";
import { ProductCard } from "./ProductCard";

export const ProductGrid = () => {
    // asumimos que tenés 3 productos
    const [p1, p2, p3] = products;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center mt-6">
            {/* Fila superior: 2 productos */}
            <div className="w-full max-w-[380px]">
                <ProductCard product={p1} />
            </div>

            <div className="w-full max-w-[380px]">
                <ProductCard product={p2} />
            </div>

            {/* Fila inferior: 1 producto centrado */}
            <div className="lg:col-span-2 flex justify-center w-full">
                <div className="w-full max-w-[380px]">
                    <ProductCard product={p3} />
                </div>
            </div>
        </div>
    );
};


