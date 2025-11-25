import silla1 from "../assets/products/silla1.jpeg";
import silla2 from "../assets/products/silla2.jpeg";
import silla3 from "../assets/products/silla3.jpeg";

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
        imagen: silla1
    },
    {
        nombre: "Banqueta Modelo Trama",
        id: 2,
        precio: 500,
        stock: 10,
        descripcion: "Trenzado en cuadrícula • Diseño rústico-moderna • Resistente y cómoda",
        imagen: silla2
    },
    {
        nombre: "Banqueta Modelo Arka",
        id: 3,
        precio: 500,
        stock: 10,
        descripcion: "Patrón combinado exclusivo • Inspirado en diseño escandinavo moderno",
        imagen: silla3
    },

];