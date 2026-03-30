import logoHornitos from '../assets/logo-hornitos.jpeg'
import { navLinks } from '../data/hornitos'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#6d402b]/20 bg-[#5a321d] text-white shadow-[0_8px_24px_rgba(90,50,29,0.18)]">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/70 bg-[#4d2a1a]"
          aria-label="Ir al inicio"
        >
          <img src={logoHornitos} alt="Hornitos" className="h-full w-full object-cover" />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[1.02rem] font-semibold tracking-wide transition hover:text-[#ffca8b]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center rounded-full bg-white px-4 py-2 text-sm text-[#7d5a48] shadow-sm md:flex">
            ¿Tengo antojos de...?
          </div>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-black text-[#5a321d] transition hover:scale-105"
            aria-label="Buscar"
          >
            ⌕
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar