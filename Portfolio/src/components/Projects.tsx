import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { ArchitectureGraph } from './ArchitectureGraph'

export function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedProject = projects[selectedIndex]

  return (
    <section id="projects" className="section-block">
      <div className="section-header">
        <p className="eyebrow">PROJECT MATRIX</p>
        <h2>Selected systems, products, and experiments.</h2>
      </div>

      <div className="project-layout">
        <div className="project-menu" role="tablist" aria-label="Projects">
          {projects.map((project, index) => (
            <button
              key={project.number}
              className={`project-tab${selectedIndex === index ? ' active' : ''}`}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="tab-head">
                <span>{project.number}</span>
                <span>{project.discipline}</span>
              </div>
              <div className="tab-body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={selectedProject.number}
            className="project-panel"
            role="tabpanel"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <div className="panel-head">
              <div>
                <p className="eyebrow tiny">{selectedProject.number} — PROJECT OVERVIEW</p>
                <h3>{selectedProject.name}</h3>
              </div>
              <span className="module-tag">{selectedProject.discipline}</span>
            </div>

            <p className="panel-copy">{selectedProject.overview}</p>

            <div className="meta-box technology-box">
              <span className="mini-label">TECHNOLOGY</span>
              <div className="chip-row">
                {selectedProject.technology.map((technology) => (
                  <span className="chip" key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <ArchitectureGraph
              architecture={selectedProject.architecture}
              projectName={selectedProject.name}
            />

            {selectedProject.demoVideo && (
              <details className="project-demo">
                <summary className="mini-label">PROJECT DEMO <span>+</span></summary>
                <video controls preload="metadata" playsInline>
                  <source src={selectedProject.demoVideo} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
              </details>
            )}

            <div className="detail-action">
              <a href={selectedProject.github} target="_blank" rel="noreferrer" className="secondary-btn compact">
                GITHUB REPOSITORY <ArrowUpRight size={14} />
              </a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="secondary-btn compact">
                  LIVE DEMO <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div id="source-code" className="source-code-block">
        <div className="section-header narrow">
          <p className="eyebrow">SOURCE CODE</p>
          <h2>Every project starts with inspectable work.</h2>
        </div>
        <div className="repo-list">
          {projects.map((project) => (
            <a className="repo-item" href={project.github} key={project.number} target="_blank" rel="noreferrer">
              <div className="repo-head">
                <span className="repo-name">{project.name}</span>
                <span className="repo-meta">{project.discipline} <ArrowUpRight size={14} /></span>
              </div>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
