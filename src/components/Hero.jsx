import { motion } from 'framer-motion'
import Keyboard from './Keyboard'

const EASE = [0.65, 0.05, 0, 1]

function RevealLine({ children, delay = 0, style }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 1, ...style }}>
      <motion.div
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.0, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 40px 60px',
      position: 'relative',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, #28282f 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5,
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        pointerEvents: 'none',
      }} />

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', alignSelf: 'flex-start' }}
      >
        <span style={{
          width: '7px', height: '7px', borderRadius: '50%',
          background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.6)',
          display: 'inline-block', animation: 'pulse 2s ease-in-out infinite',
        }} />
        <span style={{ color: '#555', fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.12em' }}>
          AVAILABLE FOR WORK
        </span>
      </motion.div>

      {/* Two-column */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }} className="hero-grid">
        {/* Left */}
        <div>
          <div style={{ marginBottom: '32px' }}>
            <RevealLine delay={0.2}>
              <h1 style={{
                fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 800,
                lineHeight: 1, letterSpacing: '-0.04em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.22)',
              }}>FULL</h1>
            </RevealLine>
            <RevealLine delay={0.32} style={{ marginTop: '4px' }}>
              <h1 style={{
                fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 800,
                lineHeight: 1, letterSpacing: '-0.04em',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.22)',
              }}>STACK</h1>
            </RevealLine>
            <RevealLine delay={0.44} style={{ marginTop: '4px' }}>
              <h1 style={{
                fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 800,
                lineHeight: 1, letterSpacing: '-0.04em', color: '#ffffff',
              }}>
                ENGINEER<span style={{ color: '#8b7cf8' }}>.</span>
              </h1>
            </RevealLine>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          >
            <p style={{
              color: '#555', fontSize: '13px', fontFamily: 'monospace',
              letterSpacing: '0.12em', marginBottom: '8px', textTransform: 'uppercase',
            }}>
              Muhammad Zaeem Zahid
            </p>
            <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.75, maxWidth: '380px', marginBottom: '36px' }}>
              6+ years building scalable web apps and APIs. Based in Lahore, Pakistan.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{
                  padding: '13px 28px', background: '#8b7cf8', color: '#fff',
                  fontSize: '13px', fontWeight: 600, borderRadius: '8px',
                  textDecoration: 'none', letterSpacing: '0.02em',
                }}
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, borderColor: '#8b7cf8', color: '#e8e8e8' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '13px 28px', border: '1px solid #252530', color: '#666',
                  fontSize: '13px', fontWeight: 600, borderRadius: '8px',
                  textDecoration: 'none', letterSpacing: '0.02em',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right — Keyboard */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} className="keyboard-col">
          <div style={{
            position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,124,248,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <Keyboard />
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{
          marginTop: '80px', paddingTop: '40px', borderTop: '1px solid #1e1e24',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px',
        }}
        className="stats-grid"
      >
        {[
          { value: '6+', label: 'Years' },
          { value: '5+', label: 'Projects' },
          { value: '3', label: 'Companies' },
          { value: '2×', label: 'ICPC' },
        ].map(({ value, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: '24px', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{value}</span>
            <span style={{ fontSize: '11px', color: '#444', fontFamily: 'monospace', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</span>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .keyboard-col { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
