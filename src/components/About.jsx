import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

export const C = '#8b7cf8'
const EASE = [0.65, 0.05, 0, 1]

export function SectionLabel({ number, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
      <span style={{ color: '#333', fontSize: '11px', fontFamily: 'monospace' }}>{number}</span>
      <span style={{ color: '#444', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{children}</span>
      <div style={{ height: '1px', flex: 1, background: '#1e1e24' }} />
    </div>
  )
}

export function RevealHeading({ children, delay = 0 }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const details = [
  { label: 'Location', value: 'Lahore, Pakistan' },
  { label: 'Education', value: 'B.S. Computer Science — University of Punjab (2020)' },
  { label: 'Email', value: 'zaeemzahid98@gmail.com' },
  { label: 'Focus', value: 'React · Python · Scalable Systems' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <FadeIn><SectionLabel number="01">About</SectionLabel></FadeIn>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="about-grid">
        <div>
          <RevealHeading delay={0.05}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f0f0f0',
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '28px',
            }}>
              Building things<br />
              that <span style={{ color: C }}>actually work.</span>
            </h2>
          </RevealHeading>
          <FadeIn delay={0.15}>
            <p style={{ color: '#777', lineHeight: 1.85, fontSize: '15px', marginBottom: '16px' }}>
              Full-Stack Software Engineer based in Lahore with 6+ years of experience
              building production-grade web applications. My core stack is React and Python —
              I've worked across the full spectrum, from pixel-perfect UIs to scalable ETL
              pipelines and big data systems.
            </p>
            <p style={{ color: '#777', lineHeight: 1.85, fontSize: '15px' }}>
              B.S. Computer Science from the University of Punjab, where I was on the
              Vice-Chancellor's Honor List four times and won ICPC regional competitions.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div>
            {details.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: '24px', padding: '18px 0', borderBottom: '1px solid #1a1a20' }}>
                <span style={{
                  color: '#333', fontSize: '10px', fontFamily: 'monospace',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  width: '76px', flexShrink: 0, paddingTop: '2px',
                }}>
                  {label}
                </span>
                <span style={{ color: '#888', fontSize: '14px', lineHeight: 1.6 }}>{value}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
