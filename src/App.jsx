import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'

import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Marquee from './components/Marquee'

const marqueeItems = [
  'React', 'TypeScript', 'Python', 'Flask', 'Node.js', 'Redux',
  'Docker', 'PostgreSQL', 'MongoDB', 'AWS', 'Socket.IO', 'Go',
  'Celery', 'Django', 'ElasticSearch', 'Scala', 'CI/CD', 'REST API',
]

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div style={{ minHeight: '100vh', background: '#111114', position: 'relative' }}>
      <motion.div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '2px', background: '#8b7cf8', scaleX,
        transformOrigin: '0%', zIndex: 9997,
      }} />

      <div aria-hidden="true" style={{
        position: 'fixed', inset: '-200px',
        width: 'calc(100% + 400px)', height: 'calc(100% + 400px)',
        backgroundImage: GRAIN_SVG, backgroundRepeat: 'repeat',
        opacity: 0.03, pointerEvents: 'none', zIndex: 9996,
        animation: 'grain 0.5s steps(1) infinite',
      }} />

      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <About />
        <Marquee items={[...marqueeItems].reverse()} reverse />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
