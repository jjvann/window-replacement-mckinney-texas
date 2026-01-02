import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Casement Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium casement window replacement in McKinney, TX. Crank-operated windows that open outward for maximum ventilation. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'casement windows McKinney TX, crank windows, replacement casement windows, Andersen casement windows, Pella casement',
}

export default function CasementWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'casement-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Casement Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Casement Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Crank-operated casement windows swing outward to capture Texas breezes from any direction. 
                Their compression seal creates an exceptionally tight fit--ideal for McKinney&apos;s hot summers 
                and occasional cold snaps.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Superior Seal &amp; Efficiency</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Unobstructed Views</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Crank Operation</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Maximum Ventilation</span>
                </div>
              </div>
              <div className={styles.heroCta}>
                <Link href="/contact" className="btn-primary large">Get Your Free Estimate</Link>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-secondary large">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/images/services/casement-windows/casement-window1.jpeg"
                alt="Premium casement windows installed in McKinney homes"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>The Most Energy-Efficient Window Style</h2>
              <p>
                Casement windows consistently rank among the most energy-efficient window styles available. 
                Unlike sliding or hung windows where sashes must have some clearance to move, casement 
                windows press firmly against the frame when closed, creating a compression seal that 
                virtually eliminates air infiltration.
              </p>
              <p>
                This tight seal makes casement windows the ideal choice for McKinney homeowners focused 
                on reducing energy costs. Combined with Low-E glass and argon gas fills from Andersen, 
                Pella, JELD-WEN, or Marvin, casement windows deliver exceptional thermal performance.
              </p>

              <h3>Capture Every Breeze</h3>
              <p>
                Because casement windows open fully and swing outward like a door, they can catch side 
                breezes that sliding or hung windows might miss. Position them to direct airflow into your 
                McKinney home for natural cooling during pleasant weather.
              </p>

              <h3>Clean, Modern Aesthetic</h3>
              <p>
                With no meeting rail to obstruct your view, casement windows offer a cleaner sightline 
                than traditional hung windows. This makes them particularly popular for modern and 
                contemporary McKinney homes.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore casement window options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Casement Windows">
                    <option value="Casement Windows">Casement Windows</option>
                  </select>
                  <input type="text" name="address" placeholder="Property Address *" required />
                  <select name="timeline" required>
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                  <textarea name="description" placeholder="Project Description *" rows={3} required></textarea>
                  <button type="submit" className="btn-primary">Get Free Estimate</button>
                </form>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Services</h4>
                <ul className={styles.relatedLinks}>
                  {windowServices.slice(0, 4).map((service) => (
                    <li key={service.slug}>
                      <Link href={service.route}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.highlight}`}>
                <h4>Why Choose Us?</h4>
                <ul className={styles.checkList}>
                  <li>Factory-certified installers</li>
                  <li>15+ years serving McKinney</li>
                  <li>Lifetime warranty protection</li>
                  <li>Financing available</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Casement Window <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>Are casement windows more energy efficient?</summary>
              <p>Yes! The compression seal created when casement windows close makes them one of the most energy-efficient window styles available.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Do casement windows require more maintenance?</summary>
              <p>The crank mechanism requires occasional lubrication, but otherwise casement windows are as low-maintenance as any other style.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Can I install casement windows where I currently have double-hung?</summary>
              <p>In most cases, yes. Our team can retrofit casement windows into existing openings or modify the opening if needed.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Casement Window Consultation</h2>
          <p>Discover the energy efficiency and beauty of casement windows. Contact us today.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large">Request Online Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
