import { BrainCircuit, Code2, Database, Network, ServerCog, Workflow } from 'lucide-react'

const capabilities = [
  { title: 'FULL-STACK', icon: Code2, items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express'] },
  { title: 'BACKEND', icon: ServerCog, items: ['Java', 'Go', 'REST APIs', 'System design', 'Auth flows'] },
  { title: 'AI / ML', icon: BrainCircuit, items: ['Python', 'MediaPipe', 'ML pipelines', 'Audio analysis', 'Computer vision'] },
  { title: 'SYSTEMS', icon: Network, items: ['Docker', 'Networking', 'Reverse proxy', 'Load balancing', 'Containers'] },
  { title: 'DATABASES', icon: Database, items: ['MySQL', 'MongoDB', 'Schema design', 'Data modeling', 'Query tuning'] },
  { title: 'TOOLS', icon: Workflow, items: ['Git', 'GitHub', 'Vite', 'CI/CD', 'Debugging'] },
]

const principles = [
  'BUILD THE SYSTEM, NOT JUST THE UI',
  'UNDERSTAND THE TRADE-OFF',
  'MAKE FAILURE VISIBLE',
  'SHIP → MEASURE → IMPROVE',
]

export function TechStack() {
  return (
    <section id="engineering" className="section-block">
      <div className="section-header narrow">
        <p className="eyebrow">ENGINEERING</p>
        <h2>Tools are useful. Understanding is the multiplier.</h2>
      </div>
      <div className="capability-grid">
        {capabilities.map(({ title, icon: Icon, items }) => (
          <article className="capability-card" key={title}>
            <div className="capability-head"><span>{title}</span><Icon size={18} /></div>
            <ul>{items.map((item) => <li key={item}><span className="small-dot" />{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="section-header narrow principles-heading">
        <p className="eyebrow">HOW I BUILD</p>
      </div>
      <div className="principle-grid">
        {principles.map((principle, index) => (
          <article className="principle-card" key={principle}>
            <span className="mini-label">0{index + 1}</span>
            <p>{principle}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
