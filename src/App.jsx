import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-[#15241f]">
      <Navbar />

      <main>
        <Hero />
        <EventsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
