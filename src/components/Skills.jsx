import { motion } from 'framer-motion'
import { skills, awards } from '../data'
import { SectionLabel, RevealHeading, C } from './About'
import FadeIn from './FadeIn'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <FadeIn><SectionLabel number="04">Skills & Recognition</SectionLabel></FadeIn>
      <RevealHeading>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f0f0f0',
          letterSpacing: '-0.03em', marginBottom: '72px',
        }}>
          What I work with
        </h2>
      </RevealHeading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '56px', marginBottom: '96px' }} className="skills-grid">
        {Object.entries(skills).map(([cat, items], ci) => (
          <FadeIn key={cat} delay={ci * 0.1}>
            <p style={{ color: '#444', fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '18px' }}>
              {cat}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {items.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.04 + si * 0.025 }}
                  whileHover={{ borderColor: 'rgba(139,124,248,0.4)', color: '#c8c8c8' }}
                  style={{
                    color: '#666', background: '#141418', border: '1px solid #1e1e24',
                    borderRadius: '6px', padding: '7px 14px', fontSize: '13px',
                    cursor: 'default', transition: 'border-color 0.2s, color 0.2s',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div style={{ borderTop: '1px solid #1a1a20', paddingTop: '72px' }}>
          <p style={{ color: '#444', fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '36px' }}>
            Honors & Awards
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }} className="awards-grid">
            {awards.map((award, i) => (
              <motion.div key={i}
                whileHover={{ borderColor: 'rgba(139,124,248,0.25)', y: -2 }}
                transition={{ duration: 0.2 }}
                style={{ borderRadius: '10px', border: '1px solid #1a1a20', background: '#141418', padding: '24px', transition: 'border-color 0.25s' }}
              >
                <div style={{ color: C, marginBottom: '14px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 style={{ color: '#b0b0b8', fontWeight: 600, fontSize: '13px', marginBottom: '10px', lineHeight: 1.4 }}>{award.title}</h4>
                <p style={{ color: '#444', fontSize: '12px', lineHeight: 1.65 }}>{award.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .awards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
