import Navbar from '../components/Navbar.jsx'
import SiteBackground from '../components/three/SiteBackground.jsx'
import CallCenterHero from '../components/CallCenterHero.jsx'
import CallCenterIndustries from '../components/CallCenterIndustries.jsx'
import CallCenterIncluded from '../components/CallCenterIncluded.jsx'
import StaffingContact from '../components/StaffingContact.jsx'
import Footer from '../components/Footer.jsx'

export default function CallCenterServices() {
  return (
    <div className="relative">
      <SiteBackground />
      <div className="relative z-10">
        <Navbar />
        <main id="main">
          <CallCenterHero />
          <CallCenterIndustries />
          <CallCenterIncluded />
          <StaffingContact />
        </main>
        <Footer />
      </div>
    </div>
  )
}