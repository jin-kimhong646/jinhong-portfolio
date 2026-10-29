
function About() {
  const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 55 },
    { name: "React", level: 35 },
    { name: "Git & GitHub", level: 60 },
    { name: "UI/UX Design", level: 50 },
  ]

  const softSkills = [
    {
      name: "Problem Solving",
      description:
        "Analyze challenges and find practical solutions.",
    },
    {
      name: "Adaptability",
      description:
        "Learn new tools and adjust to changing requirements.",
    },
    {
      name: "Teamwork",
      description:
        "Collaborate with others to achieve shared goals.",
    },
    {
      name: "Communication",
      description:
        "Share ideas clearly and listen to different perspectives.",
    },
    {
      name: "Time Management",
      description:
        "Prioritize tasks and manage deadlines effectively.",
    },
    {
      name: "Continuous Learning",
      description:
        "Explore new technologies and improve my skills.",
    },
  ]

  return (
    <section
      id="about"
      className="about-section relative isolate min-h-screen scroll-mt-0 overflow-hidden px-6 py-28 text-white md:py-36"
    >
      {/* Background effects */}
      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />

      <div className="about-stars" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            className="about-star"
            style={{
              left: `${(index * 37 + 11) % 100}%`,
              top: `${(index * 23 + 8) % 100}%`,
              animationDelay: `${(index % 5) * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
          01 — About Me
        </p>

        <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          {/* About introduction */}
          <div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              A curious mind,
              <br />
              <span className="about-gradient-text">
                a creative soul.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-200/90">
              I'm a computer science student passionate about web
              development and creating digital experiences that are
              both useful and beautiful.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-slate-300/75">
              I enjoy learning new technologies, exploring design
              ideas, and turning challenges into opportunities to
              grow as a developer.
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-sky-100/70">
              <span className="h-px w-10 bg-gradient-to-r from-sky-200 to-violet-300" />
              Create · Explore · Build
            </div>
          </div>

          {/* Skills card */}
          <div
            id="skills"
            className="about-skill-card scroll-mt-28 rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-xl md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-violet-200">
              My Toolkit
            </p>

            <h3 className="mt-3 text-xl font-medium text-white">
              Technical Skills
            </h3>

            {/* Technical skills */}
            <div className="mt-6 flex flex-col gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 rounded-full border border-violet-100/15 bg-slate-950/20 px-4 py-3 transition duration-300 hover:border-sky-200/50 hover:bg-white/[0.07]"
                >
                  <span className="min-w-0 flex-1 text-sm text-slate-100">
                    {skill.name}
                  </span>

                  <div
                    className="h-1.5 w-20 shrink-0 overflow-hidden rounded-full bg-white/15 sm:w-24"
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="skill-level-fill h-full rounded-full"
                      style={{
                        "--skill-level": `${skill.level}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-200">
                Beyond the Code
              </p>

              <h3 className="mt-3 text-xl font-medium text-white">
                Soft Skills
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-violet-200/15 bg-violet-200/[0.05] p-4 transition duration-300 hover:border-sky-200/40 hover:bg-sky-200/[0.05]"
                  >
                    <h4 className="text-sm font-medium text-violet-100">
                      {skill.name}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-slate-300/80">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing note */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm leading-7 text-slate-300/75">
                I'm continuously developing my frontend skills,
                strengthening my problem-solving abilities, and
                building projects to prepare for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
