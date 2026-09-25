import Navbar from '../components/Navbar.jsx'
import SiteBackground from '../components/three/SiteBackground.jsx'
import Hero from '../components/Hero.jsx'
import InfinityNodeSection from '../components/InfinityNodeSection.jsx'
import Services from '../components/Services.jsx'
import About from '../components/About.jsx'
import Process from '../components/Process.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="relative">
      <SiteBackground />
      <div className="relative z-10">
        <Navbar />
        <main id="main">
          <Hero />
          <InfinityNodeSection />
          <Services />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}