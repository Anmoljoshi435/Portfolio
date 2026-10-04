import { motion } from 'framer-motion'
import { ArrowUpRight, Award } from 'lucide-react'
import { credentials } from '../data/portfolio'

export function Credentials() {
  return (
    <section id="credentials" className="section-block">
      <div className="section-header narrow">
        <p className="eyebrow">CREDENTIALS &amp; ACHIEVEMENTS</p>
        <h2>Courses and certifications behind the work.</h2>
      </div>

      <div className="credential-grid">
        {credentials.map((credential, index) => (
          <motion.article
            className="credential-card"
            key={credential.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div className="credential-content">
              <div className="credential-topline">
                <span className="credential-issuer">{credential.issuer}</span>
                <span className="credential-kind">{credential.kind}</span>
              </div>
              <h3>{credential.title}</h3>
              <p className="credential-description">{credential.description}</p>
              {(credential.issued || credential.credentialId) && (
                <p className="credential-meta">
                  {[credential.issued, credential.credentialId && `ID ${credential.credentialId}`].filter(Boolean).join(' · ')}
                </p>
              )}
              <details className="credential-disclosure">
                <summary className="credential-link">
                  {credential.image ? 'VIEW CREDENTIAL' : 'VIEW COURSE DETAILS'}
                  <span className="credential-disclosure-icon">+</span>
                </summary>
                {credential.image ? (
                  <div className="credential-preview">
                    <img className="credential-image" src={credential.image} alt={`${credential.title} certificate`} loading="lazy" />
                    {credential.verificationUrl && (
                      <a className="credential-link verify-link" href={credential.verificationUrl} target="_blank" rel="noreferrer">
                        VERIFY CREDENTIAL <ArrowUpRight size={13} />
                      </a>
                    )}
                  </div>
                ) : (
                  <div className="credential-preview course-preview">
                    <div className="credential-placeholder" aria-hidden="true">
                      <Award size={28} />
                      <span>AWS</span>
                      <span>API GATEWAY</span>
                    </div>
                    <p>{credential.description}</p>
                  </div>
                )}
              </details>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
