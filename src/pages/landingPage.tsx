import Navbar from "../components/layout/navbar"
import HeroSection from "../features/landing/components/hero"
import FeatureSection from "../features/landing/components/feature"
import Footer from "../components/layout/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] px-6 py-2">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  )
}
