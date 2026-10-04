import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function Cursor() {
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)
  const targetX = useMotionValue(-30)
  const targetY = useMotionValue(-30)
  const x = useSpring(targetX, { stiffness: 550, damping: 36, mass: 0.18 })
  const y = useSpring(targetY, { stiffness: 550, damping: 36, mass: 0.18 })

  useEffect(() => {
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      targetX.set(event.clientX)
      targetY.set(event.clientY)
      setActive(true)
    }
    const leave = () => setActive(false)
    const over = (event: PointerEvent) => {
      const element = (event.target as Element | null)?.closest('a, button, [data-cursor]')
      if (!element) {
        setLabel('')
        return
      }
      setLabel(element.getAttribute('data-cursor') ?? (element.matches('a[target="_blank"]') ? 'OPEN' : 'VIEW'))
    }
    const out = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest('a, button, [data-cursor]')) setLabel('')
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    window.addEventListener('pointerout', out, { passive: true })
    window.addEventListener('blur', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      window.removeEventListener('pointerout', out)
      window.removeEventListener('blur', leave)
    }
  }, [targetX, targetY])

  return (
    <motion.div
      className={`custom-cursor${active ? ' is-visible' : ''}${label ? ' is-active' : ''}`}
      style={{ x, y }}
      aria-hidden="true"
    >
      <span className="custom-cursor-dot" />
      {label && <span className="custom-cursor-label">{label}</span>}
    </motion.div>
  )
}
