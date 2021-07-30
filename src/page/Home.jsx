import React from 'react'
import { useState } from 'react'
import About from '../components/About'
import Benefit from '../components/Benefit'
import Contact from '../components/Contact'
import Discover from '../components/Discover'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import Sidebar from '../components/Sidebar'

function Home() {
    const [isOpen,setIsOpen] = useState(false)
  const toggle = ()=> {
      setIsOpen(!isOpen)
  }
    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
             <HeroSection />
             <Contact />
             <Discover />
             <Info />
             <Benefit />
             <Service />
             <About />
             <Footer />
        </>
    )
}

export default Home
