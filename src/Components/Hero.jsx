export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Muhsin-Mashkur2.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Muhsin
              <br />
              Mashkur
            </h1>

            {/* Subtitle */}
            <div className="mb-8 space-y-2">
              <p className="text-lg font-medium text-white/90 sm:text-xl lg:text-2xl">
                A Speaker. A Teacher. A Torchbearer of Qur'anic Light.
              </p>
            </div>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
              From memorizing the Qur'an at 11, to earning the Prime Minister's Gold Medal at Dhaka University — Muhsin
              Mashkur walks a lifelong path to reconnect the Ummah with the meaning of the Qur'an.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
