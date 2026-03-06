import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const UNIT = 34
const GAP = 3
const ACCENT = '#8b7cf8'
const GLOWING = new Set(['R', 'E', 'A', 'C', 'T', 'P', 'Y', 'Z', 'S', 'D'])

const rows = [
  [{ l: '`' }, { l: '1' }, { l: '2' }, { l: '3' }, { l: '4' }, { l: '5' }, { l: '6' }, { l: '7' }, { l: '8' }, { l: '9' }, { l: '0' }, { l: '-' }, { l: '=' }, { l: '⌫', w: 2 }],
  [{ l: 'TAB', w: 1.5 }, { l: 'Q' }, { l: 'W' }, { l: 'E' }, { l: 'R' }, { l: 'T' }, { l: 'Y' }, { l: 'U' }, { l: 'I' }, { l: 'O' }, { l: 'P' }, { l: '[' }, { l: ']' }, { l: '\\', w: 1.5 }],
  [{ l: 'CAPS', w: 1.75 }, { l: 'A' }, { l: 'S' }, { l: 'D' }, { l: 'F' }, { l: 'G' }, { l: 'H' }, { l: 'J' }, { l: 'K' }, { l: 'L' }, { l: ';' }, { l: "'" }, { l: '↵', w: 2.25 }],
  [{ l: '⇧', w: 2.25 }, { l: 'Z' }, { l: 'X' }, { l: 'C' }, { l: 'V' }, { l: 'B' }, { l: 'N' }, { l: 'M' }, { l: ',' }, { l: '.' }, { l: '/' }, { l: '⇧', w: 2.75 }],
  [{ l: '⌃', w: 1.5 }, { l: '⌥', w: 1.5 }, { l: '', w: 9, space: true }, { l: '⌥', w: 1.5 }, { l: '⌃', w: 1.5 }],
]

const pressable = rows.flat().filter(k => k.l.length <= 2 && !k.space)

export default function Keyboard() {
  const [pressed, setPressed] = useState(new Set())

  useEffect(() => {
    const interval = setInterval(() => {
      const count = Math.random() > 0.5 ? 2 : 1
      const selected = new Set()
      for (let i = 0; i < count; i++) {
        selected.add(pressable[Math.floor(Math.random() * pressable.length)].l)
      }
      setPressed(selected)
      setTimeout(() => setPressed(new Set()), 130)
    }, 700)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 20, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 20, rotateY: -15 }}
      transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      style={{ perspective: '900px', animation: 'float 5s ease-in-out infinite', willChange: 'transform' }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: '-20px',
        background: 'radial-gradient(ellipse at center, rgba(139,124,248,0.1) 0%, transparent 70%)',
        borderRadius: '20px', filter: 'blur(20px)', zIndex: -1,
      }} />

      {/* Body */}
      <div style={{
        background: 'linear-gradient(145deg, #1e1e24, #18181e)',
        borderRadius: '14px', padding: '14px 14px 18px',
        border: '1px solid #28282e',
        boxShadow: `0 60px 120px rgba(0,0,0,0.6), 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}>
        {/* LED strip */}
        <div style={{
          height: '2px', borderRadius: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(139,124,248,0.7), rgba(139,124,248,0.4), transparent)',
          marginBottom: '12px', opacity: 0.8,
        }} />

        {rows.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: `${GAP}px`, marginBottom: ri < rows.length - 1 ? `${GAP}px` : 0 }}>
            {row.map((key, ki) => {
              const isGlow = GLOWING.has(key.l)
              const isPressed = pressed.has(key.l)
              const keyW = (key.w ?? 1) * UNIT + ((key.w ?? 1) - 1) * GAP

              return (
                <motion.div
                  key={`${ri}-${ki}`}
                  animate={isPressed ? { y: 3, scale: 0.96 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.07, ease: 'easeOut' }}
                  style={{
                    width: keyW, height: UNIT, borderRadius: '5px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: key.l.length > 2 ? '7px' : key.l.length === 2 ? '9px' : '11px',
                    fontFamily: 'monospace', letterSpacing: '0.05em', userSelect: 'none',
                    background: key.space
                      ? '#1a1a20'
                      : isGlow
                        ? 'linear-gradient(145deg, rgba(139,124,248,0.2), rgba(139,124,248,0.1))'
                        : 'linear-gradient(145deg, #252530, #1e1e28)',
                    color: isGlow ? '#a095fa' : '#3a3a48',
                    boxShadow: isPressed
                      ? 'inset 0 1px 2px rgba(0,0,0,0.4)'
                      : isGlow
                        ? `0 3px 0 rgba(139,124,248,0.4), 0 0 14px rgba(139,124,248,0.15), inset 0 1px 0 rgba(255,255,255,0.08)`
                        : `0 3px 0 #0d0d10, inset 0 1px 0 rgba(255,255,255,0.04)`,
                    border: isGlow ? '1px solid rgba(139,124,248,0.35)' : '1px solid #242430',
                    transition: 'box-shadow 0.07s',
                  }}
                >
                  {key.l}
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
