import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from '../data'

const EASE = [0.65, 0.05, 0, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'background 0.4s, border-color 0.4s',
        background: scrolled ? 'rgba(17,17,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e1e24' : '1px solid transparent',
      }}
    >
      <nav style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 40px',
        height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px', letterSpacing: '-0.03em' }}>
            zaeem<span style={{ color: '#8b7cf8' }}>.</span>
          </span>
        </a>

        <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {nav.map((item, i) => (
            <motion.li key={item} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.06 }}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{ color: '#555', textDecoration: 'none', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'monospace', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#aaa'}
                onMouseLeave={e => e.target.style.color = '#555'}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', color: '#666', padding: '4px', display: 'none' }}
          aria-label="Toggle menu"
        >
          {menuOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          }
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ background: '#111114', borderBottom: '1px solid #1e1e24', overflow: 'hidden' }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: '12px 40px 20px' }}>
              {nav.map(item => (
                <li key={item} style={{ padding: '10px 0' }}>
                  <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                    style={{ color: '#666', textDecoration: 'none', fontSize: '14px', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </motion.header>
  )
}
