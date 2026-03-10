import Header from "@/components/layout/Header"
import FloatingCTA from "@/components/cta/FloatingCTA"
import MobileCTA from "@/components/cta/MobileCTA"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import LegalSection from "@/components/sections/LegalSection"
import WorkGallery from "@/components/sections/WorkGallery"
import WhyChoose from "@/components/sections/WhyChoose"
import Contact from "@/components/sections/Contact"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <LegalSection />
      <WorkGallery />
      <WhyChoose />
      <Contact />
      <Footer />

      <FloatingCTA />
      <MobileCTA />
    </>
  )
}