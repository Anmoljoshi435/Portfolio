import { ArrowUpRight, GitBranch, Mail, Network } from 'lucide-react'
import { email, github, linkedIn } from '../data/portfolio'

const links = [
  { label: 'EMAIL', value: email, href: `mailto:${email}`, icon: Mail },
  { label: 'LINKEDIN', value: 'linkedin.com/in/anmol-joshi-648a6029a', href: linkedIn, icon: Network },
  { label: 'GITHUB', value: 'github.com/Anmoljoshi435', href: github, icon: GitBranch },
]

export function Contact() {
  return (
    <section id="contact" className="section-block contact-block">
      <div className="section-header narrow">
        <p className="eyebrow">OPEN CHANNEL</p>
        <h2>For opportunities, engineering discussions, and collaboration.</h2>
      </div>
      <div className="contact-grid">
        {links.map(({ label, value, href, icon: Icon }) => (
          <a className="contact-card" href={href} key={label} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
            <div className="contact-head"><span>{label}</span><Icon size={18} /></div>
            <p>{value}</p>
            <ArrowUpRight className="contact-arrow" size={15} />
          </a>
        ))}
      </div>
    </section>
  )
}
