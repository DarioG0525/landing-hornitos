import { menuCards } from '../data/hornitos'

function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#9d5a12]">Menú</p>
        <h2 className="mt-2 text-4xl font-black text-[#5a321d]">Menú</h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {menuCards.map((card) => (
          <article
            key={card.title}
            className="group overflow-hidden rounded-[1.8rem] border border-[#dcc7b1] bg-white shadow-[0_18px_45px_rgba(96,54,32,0.12)] transition hover:-translate-y-1"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-30`} />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#7b3f10]">
                Hornitos
              </div>
            </div>

            <div className="space-y-2 p-5 text-center">
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#5a321d]">{card.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MenuSection