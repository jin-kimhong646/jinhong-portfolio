
import { useEffect, useState } from "react"

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
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

function Navbar() {
  const [active, setActive] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const marker = 150
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5

      const existingSections = links
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id),
        }))
        .filter((section) => section.element)

      if (window.scrollY < 100) {
        setActive("home")
        return
      }

      if (atBottom) {
        setActive(existingSections[existingSections.length - 1]?.id ?? "home")
        return
      }

      let currentSection = "home"

      for (const section of existingSections) {
        const top = section.element.getBoundingClientRect().top

        if (top <= marker) {
          currentSection = section.id
        } else {
          break
        }
      }

      setActive(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const navigateTo = (id) => {
    setMenuOpen(false)

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header className="portfolio-nav fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-slate-900/35 px-5 py-3 shadow-lg backdrop-blur-xl md:px-7">
        <button
          type="button"
          onClick={() => navigateTo("home")}
          className="text-lg font-semibold tracking-wide text-white"
          aria-label="Go to Home"
        >
          JINHONG<span className="text-violet-300">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigateTo(link.id)}
              aria-current={active === link.id ? "location" : undefined}
              className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                active === link.id
                  ? "border-white/20 bg-white/15 text-white shadow-[0_0_18px_rgba(168,216,255,0.18)]"
                  : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-white md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/15 bg-slate-900/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigateTo(link.id)}
              aria-current={active === link.id ? "location" : undefined}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                active === link.id
                  ? "bg-violet-300/15 text-violet-200"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
