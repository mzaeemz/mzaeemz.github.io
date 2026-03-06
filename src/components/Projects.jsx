import { motion } from 'framer-motion'
import { projects } from '../data'
import { SectionLabel, RevealHeading, C } from './About'
import FadeIn from './FadeIn'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <FadeIn><SectionLabel number="03">Projects</SectionLabel></FadeIn>
      <RevealHeading>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#f0f0f0',
          letterSpacing: '-0.03em', marginBottom: '72px',
        }}>
          Things I've built
        </h2>
      </RevealHeading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="projects-grid">
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 0.07}
            style={{ gridColumn: i === 0 ? 'span 2' : 'span 1' }}
            className={i === 0 ? 'featured-proj' : ''}
          >
            <ProjectCard project={project} featured={i === 0} index={i} />
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .featured-proj { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project, featured, index }) {
  return (
    <motion.div
      whileHover={{ borderColor: 'rgba(139,124,248,0.25)', y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        borderRadius: '12px',
        border: '1px solid #1a1a20',
        background: '#141418',
        padding: featured ? '36px 40px' : '28px',
        height: '100%', display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <span style={{
        position: 'absolute', top: '20px', right: '24px',
        fontSize: '48px', fontWeight: 800, color: '#1c1c22',
        fontFamily: 'monospace', letterSpacing: '-0.04em', lineHeight: 1, userSelect: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      <p style={{ color: '#333', fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
        Project
      </p>
      <h3 style={{ color: '#d8d8d8', fontWeight: 600, fontSize: featured ? '22px' : '16px', letterSpacing: '-0.02em', marginBottom: '14px' }}>
        {project.name}
      </h3>
      <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.8, flex: 1, marginBottom: '24px' }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.map(tech => (
          <span key={tech} style={{
            color: '#555', background: '#1a1a20', border: '1px solid #222228',
            borderRadius: '4px', padding: '4px 10px', fontSize: '11px', fontFamily: 'monospace',
          }}>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
