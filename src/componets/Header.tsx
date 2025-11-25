export const Header = () => {
    return (
        <header className="pt-10 pb-6">
            <div className="max-w-5xl mx-auto px-4 text-center">

                <h1 className="text-5xl font-bold text-stone-100">
                    ENKO Studio
                </h1>


                <nav className="mt-4 flex justify-center gap-6 text-stone-300 text-sm">
                    <a href="#quienes-somos" className="hover:text-amber-300 transition-colors">Quiénes somos</a>
                    <a href="#catalogo" className="hover:text-amber-300 transition-colors">Catálogo</a>
                    <a href="#contacto" className="hover:text-amber-300 transition-colors">Contacto</a>
                </nav>

            </div>
        </header>
    );
};