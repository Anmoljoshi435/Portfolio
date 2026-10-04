import { Activity, ArrowUpRight, Cpu, FileText } from 'lucide-react'

const fullStackResume = '/resumes/full-stack-developer-resume.pdf'
const softwareEngineerResume = '/resumes/software-engineer-resume.pdf'

export function Education() {
  return (
    <section id="profile" className="section-block">
      <div className="section-header narrow">
        <p className="eyebrow">ENGINEERING PROFILE</p>
        <h2>Grounded in computer science. Focused on useful systems.</h2>
      </div>
      <div className="profile-grid">
        <article className="profile-card">
          <div className="resume-heading">
            <span className="mini-label">TARGETED RESUMES</span>
          </div>
          <div className="resume-list">
            <article className="resume-option">
              <div className="resume-option-copy">
                <h3 className="resume-title">Full-Stack Developer</h3>
                <span className="credential-kind">FULL-STACK DEVELOPMENT</span>
              </div>
              <a className="resume-btn" href={fullStackResume} target="_blank" rel="noreferrer">
                <FileText size={16} /> VIEW RESUME <ArrowUpRight size={14} />
              </a>
            </article>
            <article className="resume-option">
              <div className="resume-option-copy">
                <h3 className="resume-title">Software Engineer</h3>
                <span className="credential-kind">SOFTWARE DEVELOPMENT</span>
              </div>
              <a className="resume-btn" href={softwareEngineerResume} target="_blank" rel="noreferrer">
                <FileText size={16} /> VIEW RESUME <ArrowUpRight size={14} />
              </a>
            </article>
          </div>
          <div className="profile-body">
            <div>
              <span className="mini-label">EDUCATION</span>
              <p>Cambridge Institute of Technology</p>
              <p>B.E. Computer Science &amp; Engineering</p>
              <p>Visvesvaraya Technological University</p>
            </div>
            <div>
              <span className="mini-label">CURRENT FOCUS</span>
              <p>Full-stack development, backend systems, and AI-powered applications.</p>
            </div>
            <div>
              <span className="mini-label">PROJECTS</span>
              <p>NeuroScreen.AI, CampusPulse, and Dataplane.</p>
            </div>
          </div>
        </article>

        <article className="profile-card accent-panel">
          <div className="capability-head"><span>ENGINEERING PRINCIPLES</span><Cpu size={18} /></div>
          <div className="map-list">
            {[
              'Product thinking anchored in engineering constraints.',
              'Backend systems designed for reliability and maintainability.',
              'AI workflows built with explicit scope and careful claims.',
              'Architecture choices that prioritize clarity and iteration.',
            ].map((item) => (
              <div className="map-row" key={item}><Activity size={15} /><p>{item}</p></div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
