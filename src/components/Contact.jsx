import { motion } from 'framer-motion'
import { SectionLabel, RevealHeading, C } from './About'
import FadeIn from './FadeIn'

const EASE = [0.65, 0.05, 0, 1]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 40px 100px', maxWidth: '1200px', margin: '0 auto' }}>
      <FadeIn><SectionLabel number="05">Contact</SectionLabel></FadeIn>

      <FadeIn delay={0.1}>
        <motion.div
          whileHover={{ borderColor: 'rgba(139,124,248,0.18)' }}
          transition={{ duration: 0.3 }}
          style={{
            borderRadius: '20px', border: '1px solid #1a1a20',
            background: '#141418', padding: 'clamp(48px, 8vw, 96px)',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: '600px', height: '300px',
            background: 'radial-gradient(ellipse at center, rgba(139,124,248,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <p style={{ color: '#444', fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '24px' }}>
            Open to opportunities
          </p>

          <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
            <motion.h2
              initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              Let's build something
            </motion.h2>
          </div>
          <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
            <motion.h2
              initial={{ y: '100%' }} whileInView={{ y: '0%' }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              style={{
                fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: 'transparent',
                letterSpacing: '-0.04em', lineHeight: 1.05,
                WebkitTextStroke: '1px rgba(255,255,255,0.15)',
              }}
            >
              together<span style={{ WebkitTextStroke: '1px rgba(139,124,248,0.6)', color: 'transparent' }}>.</span>
            </motion.h2>
          </div>

          <p style={{ color: '#555', fontSize: '15px', maxWidth: '420px', margin: '0 auto 48px', lineHeight: 1.75 }}>
            Whether it's a full-time role, freelance project, or just a conversation — reach out.
          </p>

          <motion.a
            href="mailto:zaeemzahid98@gmail.com"
            whileHover={{ scale: 1.04, background: '#7c6de0' }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block', padding: '16px 36px', background: C,
              color: '#fff', fontWeight: 600, fontSize: '14px', borderRadius: '10px',
              textDecoration: 'none', letterSpacing: '0.02em', marginBottom: '56px',
              transition: 'background 0.2s',
            }}
          >
            zaeemzahid98@gmail.com
          </motion.a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '36px', paddingTop: '36px', borderTop: '1px solid #1a1a20' }}>
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/zaeem-zahid', icon: <LinkedInIcon /> },
              { label: 'GitHub', href: 'https://github.com/zaeemzahid', icon: <GitHubIcon /> },
            ].map(({ label, href, icon }) => (
              <motion.a
                key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ color: '#aaa' }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#444', textDecoration: 'none', fontSize: '13px', fontWeight: 500, letterSpacing: '0.05em', transition: 'color 0.2s' }}
              >
                {icon} {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </FadeIn>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
