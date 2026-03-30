import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#5a321d]">
      <Navbar />

      <main>
        <Hero />
        <MenuSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
