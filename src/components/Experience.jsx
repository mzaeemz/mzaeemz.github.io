import { motion } from 'framer-motion'
import { experience } from '../data'
import { SectionLabel, RevealHeading, C } from './About'
import FadeIn from './FadeIn'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <FadeIn><SectionLabel number="02">Experience</SectionLabel></FadeIn>
      <RevealHeading>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f0f0f0',
          letterSpacing: '-0.03em', marginBottom: '72px',
        }}>
          Where I've worked
        </h2>
      </RevealHeading>

      <div>
        {experience.map((job, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ backgroundColor: '#141418' }}
              style={{
                display: 'grid', gridTemplateColumns: '200px 1fr', gap: '48px',
                padding: '40px 24px',
                borderBottom: '1px solid #1a1a20',
                borderTop: i === 0 ? '1px solid #1a1a20' : 'none',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
              }}
              className="exp-row"
            >
              {/* Left */}
              <div>
                <p style={{ color: '#444', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.08em', marginBottom: '10px', lineHeight: 1.6 }}>
                  {job.period}
                </p>
                {job.type && (
                  <span style={{
                    color: '#444', fontSize: '10px', border: '1px solid #1e1e24',
                    borderRadius: '4px', padding: '3px 8px', fontFamily: 'monospace',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    {job.type}
                  </span>
                )}
              </div>

              {/* Right */}
              <div>
                <p style={{ color: C, fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  {job.company}
                </p>
                <h3 style={{ color: '#d8d8d8', fontWeight: 600, fontSize: '20px', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  {job.role}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '14px', fontSize: '14px', color: '#777', lineHeight: 1.75 }}>
                      <span style={{ color: C, flexShrink: 0, fontSize: '5px', marginTop: '8px' }}>●</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
