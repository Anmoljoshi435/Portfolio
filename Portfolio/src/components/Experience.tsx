import { useState } from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'
import { ArchitectureGraph } from './ArchitectureGraph'

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedExperience = experience[selectedIndex]

  return (
    <section id="experience" className="section-block">
      <div className="section-header narrow">
        <p className="eyebrow">BUILD LOG</p>
        <h2>Experience through contribution and iteration.</h2>
      </div>
      <div className="timeline experience-tabs" role="tablist" aria-label="Internship experience">
        {experience.map((item, index) => (
          <motion.button
            className={`timeline-row experience-tab${selectedIndex === index ? ' active' : ''}`}
            key={item.company}
            type="button"
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls="experience-details"
            onClick={() => setSelectedIndex(index)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <div>
              <span className="mini-label">ORGANIZATION</span>
              <p className="timeline-value strong">{item.company}</p>
            </div>
            <div>
              <span className="mini-label">ROLE</span>
              <p className="timeline-value">{item.role}</p>
            </div>
            <div>
              <span className="mini-label">FORMAT</span>
              <p className="timeline-value">INTERNSHIP</p>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.article
        id="experience-details"
        className="experience-details"
        key={selectedExperience.company}
        role="tabpanel"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="experience-detail-heading">
          <div>
            <p className="eyebrow tiny">ROLE CONTRIBUTIONS</p>
            <h3>{selectedExperience.role}</h3>
            <p className="experience-company">{selectedExperience.company}</p>
          </div>
          <span className="credential-kind">INTERNSHIP</span>
        </div>

        <ul className="experience-task-list">
          {selectedExperience.tasks.map((task) => (
            <li key={task}><span className="experience-task-dot" />{task}</li>
          ))}
        </ul>

        <ArchitectureGraph
          architecture={selectedExperience.workflow}
          projectName={selectedExperience.company}
          heading="WORKFLOW GRAPH"
          caption={`A high-level view of the ${selectedExperience.role.toLowerCase()} workflow.`}
        />
      </motion.article>
    </section>
  )
}
