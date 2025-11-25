import type { Product } from "../data/product";

type Props = {
    product: Product;
};


export const ProductCard = ({ product }: Props) => {
    return (
        <article className="bg-black/90 text-stone-100 rounded-2xl shadow-lg p-4 flex flex-col">
            <div className="w-full aspect-[4/3] bg-black rounded-xl overflow-hidden flex items-center justify-center">
                <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            <h3 className="text-lg font-semibold mt-3">
                {product.nombre}
            </h3>

            <p className="text-sm mt-1 text-stone-400">
                {product.descripcion}
            </p>

            <a
                href={`https://wa.me/5491162845246?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20y%20precio%20de%20${encodeURIComponent(product.nombre)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-amber-400 text-stone-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-amber-300 transition-colors"
            >
                Consulta
            </a>
        </article>
    );
};



