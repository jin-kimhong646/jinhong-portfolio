
const particles = [
  { left: "8%", top: "22%", delay: "0s" },
  { left: "36%", top: "15%", delay: "2s" },
  { left: "68%", top: "24%", delay: "1s" },
  { left: "88%", top: "48%", delay: "3s" },
  { left: "52%", top: "75%", delay: "1.5s" },
  { left: "17%", top: "80%", delay: "2.5s" },
]

function Hero() {
  return (
    <section
      id="home"
      className="hero relative isolate min-h-[90vh] overflow-hidden"
    >
      {/* Painterly lake background */}
      <div className="hero-landscape absolute inset-0 -z-30" />

      {/* Blend the artwork into the text area */}
      <div className="hero-atmosphere absolute inset-0 -z-20" />

      {/* Animated light */}
      <div className="hero-light absolute inset-0 -z-10" />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-8 px-6 py-24 md:grid-cols-[1fr_1fr] lg:gap-12">
        {/* Introduction */}
        <div className="hero-copy max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-sky-200">
            <span className="h-px w-8 bg-violet-300" />
            Hello, I'm Jinhong
          </p>

          <h1 className="hero-title text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
            SOFTWARE
            <br />
            <span className="hero-gradient-text">ENGINEER</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm font-medium uppercase leading-7 tracking-[0.18em] text-slate-200 md:text-base">
            Turning ideas into
            <br />
            meaningful digital experiences.
          </p>

          <p className="mt-5 max-w-md text-base leading-7 text-slate-200/90">
            I'm a computer science student who enjoys building modern web
            applications, solving problems, and creating thoughtful user
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="hero-primary-button rounded-full px-7 py-3.5 text-sm font-medium text-white"
            >
              View my projects <span className="ml-2">↗</span>
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm text-white backdrop-blur-md transition hover:border-violet-200 hover:bg-white/20"
            >
              About me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-sm text-slate-200">
            <span className="h-px w-8 bg-white/40" />
            <span className="tracking-[0.2em]">
              CREATE · EXPLORE · BUILD
            </span>
          </div>
        </div>

        {/* Portrait blended into the fantasy landscape */}
        <div className="hero-portrait-wrap relative mx-auto w-full max-w-lg">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

         <div className="hero-portrait relative overflow-hidden">
            <img
              src="/images/me.jpg"
              alt="Portrait of Jinhong"
              className="hero-portrait-image"
            />

            {/* Blend portrait edges into the lake artwork */}
            <div className="hero-portrait-blend absolute inset-0" />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
              <div className="rounded-xl border border-white/20 bg-slate-950/30 px-4 py-3 backdrop-blur-lg">
                <p className="text-xs uppercase tracking-[0.25em] text-sky-100">
                  The developer
                </p>
                <p className="mt-1 text-lg font-medium text-white">
                  Jinhong
                </p>
              </div>

              <span className="mb-2 text-2xl text-pink-200">✧</span>
            </div>
          </div>

          <div className="hero-floating-label absolute -left-4 top-1/4 rounded-xl border border-white/20 bg-slate-900/30 px-4 py-3 backdrop-blur-xl md:-left-10">
            <span className="text-xs tracking-widest text-teal-100">
              ✦ CREATIVE MIND
            </span>
          </div>

          <div className="hero-floating-label absolute -right-2 bottom-1/4 rounded-xl border border-white/20 bg-slate-900/30 px-4 py-3 backdrop-blur-xl md:-right-8">
            <span className="text-xs tracking-widest text-pink-100">
              ✧ BUILDING THE FUTURE
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] tracking-[0.5em] text-white/90 md:flex"
      >
        SCROLL TO EXPLORE <span className="animate-bounce">↓</span>
      </a>
    </section>
  )
}

export default Hero
