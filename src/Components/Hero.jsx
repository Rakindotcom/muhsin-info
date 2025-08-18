"use client"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] md:h-full w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Muhsin-Mashkur2.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Desktop badge (inline only on large screens) */}
            <div className="hidden lg:inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20">
              <div className="h-2 w-2 rounded-full bg-emerald-400 mr-2"></div>
              <span className="text-sm font-medium text-white/90">Qur'anic Scholar & Speaker</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">
              <span className="block">Muhsin</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Mashkur
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mb-8 space-y-2">
              <p className="text-lg font-medium text-white sm:text-xl lg:text-2xl drop-shadow-lg">
                A Speaker. A Teacher. <span className="text-amber-400">A Torchbearer of Qur'anic Light.</span>
              </p>
            </div>

            {/* Description */}
            <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-base text-justify leading-relaxed text-white/95 sm:text-lg lg:text-xl">
                From memorising the Qur’an at 11, to earning the Prime Minister’s Gold Medal at Dhaka University — Muhsin Mashkur has dedicated his life to making Qur’anic Arabic accessible, helping the Ummah truly understand the Divine Message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
