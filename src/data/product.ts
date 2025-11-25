

export interface Product {
    nombre: string,
    id: number,
    precio: number,
    stock: number,
    descripcion: string,
    imagen: string,

}



export const products: Product[] = [

    {
        nombre: "Banqueta Modelo Línia",
        id: 1,
        precio: 500,
        stock: 10,
        descripcion: "Encordado lineal artesanal • Madera de pino lustrado • Estilo nórdico minimalista",
        imagen: "src/assets/Products/silla1.jpeg"
    },
    {
        nombre: "Banqueta Modelo Trama",
        id: 2,
        precio: 500,
        stock: 10,
        descripcion: "Trenzado en cuadrícula • Diseño rústico-moderna • Resistente y cómoda",
        imagen: "src/assets/Products/silla2.jpeg"
    },
    {
        nombre: "Banqueta Modelo Arka",
        id: 3,
        precio: 500,
        stock: 10,
        descripcion: "Patrón combinado exclusivo • Inspirado en diseño escandinavo moderno",
        imagen: "src/assets/Products/silla3.jpeg"
    },

];