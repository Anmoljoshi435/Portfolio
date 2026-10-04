import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { email } from '../data/portfolio'

const fullStackResume = '/resumes/full-stack-developer-resume.pdf'
const softwareEngineerResume = '/resumes/software-engineer-resume.pdf'

const links = [
  { label: 'SYSTEM', href: '#system' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ENGINEERING', href: '#engineering' },
  { label: 'CREDENTIALS', href: '#credentials' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="nav-mark" href="#system" aria-label="Anmol Joshi, home">ANMOL JOSHI</a>
        <div className="nav-desktop">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-resume" href={`mailto:${email}?subject=Resume%20request`}>
          <span className="availability-dot" /> AVAILABLE FOR OPPORTUNITIES
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="nav-mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href={fullStackResume} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            FULL-STACK DEVELOPER RESUME
          </a>
          <a href={softwareEngineerResume} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            SOFTWARE ENGINEER RESUME
          </a>
        </div>
      )}
    </header>
  )
}
