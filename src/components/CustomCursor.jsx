import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(useMotionValue(-100), { stiffness: 120, damping: 18, mass: 0.5 })
  const ringY = useSpring(useMotionValue(-100), { stiffness: 120, damping: 18, mass: 0.5 })
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  // keep refs for spring sources
  const rX = useRef(null)
  const rY = useRef(null)

  useEffect(() => {
    // grab the underlying spring motion values
    rX.current = ringX
    rY.current = ringY

    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      rX.current.set(e.clientX)
      rY.current.set(e.clientY)
    }

    const enter = () => setHidden(false)
    const leave = () => setHidden(true)

    const checkHover = (e) => {
      const el = e.target
      const isInteractive = el.closest('a, button, [data-cursor-hover]')
      setHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: hovered ? 0 : 6,
          height: hovered ? 0 : 6,
          borderRadius: '50%',
          background: '#8b7cf8',
          pointerEvents: 'none',
          zIndex: 99999,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? '#8b7cf8' : 'rgba(139,124,248,0.35)'}`,
          background: hovered ? 'rgba(139,124,248,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
          transition: 'width 0.25s, height 0.25s, border-color 0.2s, background 0.2s, opacity 0.2s',
        }}
      />
    </>
  )
}
