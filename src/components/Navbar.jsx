function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#c3d6cc] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="text-base font-black uppercase tracking-[0.15em] text-[#14533f]" aria-label="Ir al inicio">
          Eventos API Lab
        </a>

        <nav className="flex items-center gap-5 text-xs font-bold uppercase tracking-[0.1em] text-[#2f5e4e] sm:text-sm">
          <a href="#top" className="transition hover:text-[#14805d]">Inicio</a>
          <a href="#eventos" className="transition hover:text-[#14805d]">Eventos</a>
          <a href="#footer" className="transition hover:text-[#14805d]">Info</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar