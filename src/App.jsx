
import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />

        {/* Add Projects and Contact sections here later */}
      </main>
    </>
  )
}

export default App
