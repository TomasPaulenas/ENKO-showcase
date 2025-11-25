import "./App.css";
import { Header } from "./componets/Header";
import { ProductGrid } from "./componets/ProductGrid";

function App() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto mt-10 mb-20 px-8 py-16 space-y-24 bg-[rgba(25,25,25,0.55)] backdrop-blur-sm rounded-2xl shadow-xl text-stone-100">

        <section id="quienes-somos" className="space-y-6">
          <h2 className="font-title text-4xl font-bold text-center mb-10 text-white tracking-wide">
            Quiénes somos
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-4xl mx-auto mb-10">
            En ENKO Studio hacemos cada pieza a mano, con dedicación y materiales de buena calidad.
            Buscamos crear muebles cómodos, prácticos y con un diseño cálido y sencillo que encaje en cualquier espacio.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
            <div className="w-full max-w-[550px] rounded-xl overflow-hidden shadow-md">
              <img src="/quienes-somos/quienes1.jpg" className="w-full h-auto object-cover" />
            </div>

            <div className="w-full max-w-[550px] rounded-xl overflow-hidden shadow-md">
              <img src="/quienes-somos/quienes2.jpg" className="w-full h-auto object-cover" />
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <div className="w-full max-w-[600px] rounded-xl overflow-hidden shadow-md">
                <img src="/quienes-somos/quienes3.jpeg" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="space-y-6">
          <h2 className="font-title text-4xl font-bold text-center mb-10 text-white tracking-wide">
            Catálogo
          </h2>
          <ProductGrid />
        </section>

        <section id="contacto" className="pt-24">
          <div className="max-w-xl mx-auto bg-[rgba(245,242,236,0.9)] border border-stone-200/70 rounded-2xl shadow-md px-8 py-8 text-center space-y-4">
            <h2 className="font-title text-2xl font-semibold text-stone-900">
              Contacto
            </h2>

            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              Por modelos personalizados u otras consultas, escribinos y te respondemos a la brevedad.
            </p>

            <a
              href="https://wa.me/5491162845246?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20los%20muebles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-amber-400 hover:bg-amber-300 text-stone-900 font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="pb-6 text-center text-xs text-stone-300">
        © {new Date().getFullYear()} ENKO Studio.
      </footer>
    </>
  );
}

export default App;
