import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const systemStatus = [
  ['FULL-STACK ENGINEERING', 'ACTIVE'],
  ['BACKEND SYSTEMS', 'ACTIVE'],
  ['AI / MACHINE LEARNING', 'ACTIVE'],
  ['SYSTEM DESIGN', 'BUILDING'],
]

export function HeroScene() {
  return (
    <section id="system" className="hero-layout">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <p className="eyebrow">ENGINEERING STATUS</p>
        <h1>ANMOL JOSHI</h1>
        <div className="hero-meta">
          <span>SOFTWARE ENGINEER</span>
          <span>FULL-STACK / AI / SYSTEMS</span>
        </div>
        <p className="lead">
          I build thoughtful product experiences, reliable backend systems, and AI-driven workflows with a focus on clarity, speed, and engineering depth.
        </p>
        <div className="cta-row">
          <a href="#projects" className="primary-btn">
            EXPLORE PROJECTS <ArrowRight size={16} />
          </a>
          <a href="#source-code" className="secondary-btn">VIEW SOURCE</a>
        </div>
      </motion.div>

      <motion.aside
        className="status-console"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
      >
        <div className="status-head">
          <span className="eyebrow tiny">ENGINEERING FOCUS</span>
          <span className="live-pill"><span className="live-dot" /> BUILDING</span>
        </div>
        <div className="status-list">
          {systemStatus.map(([label, status], index) => (
            <div className="status-row" key={label}>
              <div className="status-left">
                <span className={`status-bullet ${index === 3 ? 'amber' : 'green'}`} />
                <span>{label}</span>
              </div>
              <span className="status-tag">{status}</span>
            </div>
          ))}
        </div>
      </motion.aside>
    </section>
  )
}
