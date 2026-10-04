import { MotionConfig } from 'framer-motion'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Cursor } from './components/Cursor'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { HeroScene } from './components/HeroScene'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="portfolio-shell">
        <Cursor />
        <Navbar />
        <main className="page-shell">
          <HeroScene />
          <TechStack />
          <Projects />
          <Experience />
          <Credentials />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
