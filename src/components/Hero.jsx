function Hero() {
  return (
    <section id="top" className="border-b border-[#bdd8cb] bg-[linear-gradient(140deg,#0f3a2c_0%,#165b45_55%,#1f7357_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#d4f8ea]">
          Organizacion de eventos
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
          Programa tu proximo evento en minutos
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#e3fff4] sm:text-base">
          Crea experiencias memorables para tu comunidad. Registra nuevos eventos, revisa los que ya tienes
          programados y elimina los que ya no necesitas, todo desde un solo panel sencillo.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#11553f]">Agenda facil</span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#11553f]">Gestion centralizada</span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold tracking-[0.08em] text-[#11553f]">Actualizacion al instante</span>
        </div>
      </div>
    </section>
  )
}

export default Hero