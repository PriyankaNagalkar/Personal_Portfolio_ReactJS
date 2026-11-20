import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HeroSection from './components/HeroSection'
import Education from './components/Education'
import Certification from './components/Certification'
import AboutSection from './components/AboutSecton'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  useEffect (() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    })
  }, [])

  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />
      <HeroSection />
      <Education />
      <Certification />
      <AboutSection />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
