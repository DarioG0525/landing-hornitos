import logoHornitos from '../assets/logo-hornitos.jpeg'
import { allergens, contactLines, footerColumns } from '../data/hornitos'

function Footer() {
  return (
    <footer id="footer" className="border-t border-[#d8c0aa]/60 bg-[#4d2a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <img src={logoHornitos} alt="Hornitos" className="h-20 w-28 rounded-lg border border-white/50 object-cover" />
            <div className="mt-6 space-y-1 text-sm font-medium leading-relaxed text-white/90">
              {contactLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-black text-[#ffca8b]">{column.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {column.links.map((link) => (
                    <li key={link}>• {link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-8">
          <p className="text-sm text-white/80">
            Contiene sustancias o productos que pueden causar alergias o intolerancias:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {allergens.map((item) => (
              <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/90">
            Correo electrónico servicio al cliente: servicioalcliente@hornitos.co · Notificaciones judiciales: jcontable@hornitos.co
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/65">
            <p>Industria y Comercio · Superintendencia</p>
            <p>Reconstrucción académica de una landing real con React</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer