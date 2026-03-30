import { heroSlide } from '../data/hornitos'

function Hero() {
  const slide = heroSlide

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#dcc3af] bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-0 py-0">
        <div className="relative flex min-h-[320px] items-stretch sm:min-h-[360px] lg:min-h-[420px]">
          <div className="relative w-[38%] overflow-hidden bg-[#f5f0eb]">
            <img
              src={slide.image}
              alt="Productos"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative flex w-[62%] flex-col items-end justify-center gap-2 bg-gradient-to-l from-white via-white to-[#faf7f3] px-6 py-8 text-right sm:px-8 lg:px-12 lg:py-10">
            <p className="font-serif text-[2.2rem] leading-[0.95] text-[#ff6a00] italic sm:text-[2.8rem] lg:text-[3.4rem]">
              {slide.title}
            </p>

            <p className="font-serif text-[2.4rem] leading-[0.95] font-bold text-[#5a321d] sm:text-[3rem] lg:text-[3.8rem]">
              {slide.subtitle}
            </p>

            <p className="mt-1 text-[0.95rem] font-semibold text-[#666] sm:text-[1.1rem] lg:text-[1.3rem]">
              {slide.description}
            </p>

            <div className="mt-6 inline-flex rounded-full bg-[#ff6a3e] px-8 py-3 text-xl font-black text-white shadow-lg sm:px-10 sm:py-4 sm:text-2xl lg:text-3xl">
              {slide.cta}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 rounded-[1.5rem] bg-[#5a321d] px-4 py-3 text-white shadow-xl sm:left-6 sm:px-5 sm:py-4 lg:bottom-6 lg:left-8">
            <p className="text-sm leading-none sm:text-base">{slide.eyebrow}</p>
            <p className="text-sm font-semibold leading-none text-[#ff6a3e] sm:text-base">{slide.badge}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero