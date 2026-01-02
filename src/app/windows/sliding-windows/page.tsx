import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Sliding Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium sliding window replacement in McKinney, TX. Horizontally gliding windows for wide openings. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'sliding windows McKinney TX, horizontal sliding windows, gliding windows, wide opening windows McKinney',
}

export default function SlidingWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'sliding-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Sliding Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Sliding Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Gliding horizontally on smooth tracks, sliding windows are ideal for wide openings and areas 
                with limited exterior clearance. Their contemporary profile complements modern McKinney 
                architecture while maximizing your view.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Wide Opening Capability</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>No Exterior Swing Space</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Modern, Clean Aesthetic</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Operation</span>
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
                src="/images/services/sliding-windows/sliding-window1.jpeg"
                alt="Premium sliding windows installed in McKinney homes"
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
              <h2>Perfect for Wide Openings</h2>
              <p>
                Sliding windows excel in applications where you want the largest possible opening in a 
                horizontal orientation. Whether it&apos;s above a kitchen sink, facing a patio, or spanning 
                a wide wall, sliding windows from Andersen, Pella, JELD-WEN, and Marvin deliver.
              </p>
              <p>
                The horizontal sliding mechanism means no sash swings into the room or extends outside, 
                making them ideal for windows facing walkways, patios, or other areas where exterior 
                clearance is limited.
              </p>

              <h3>Smooth, Effortless Operation</h3>
              <p>
                Modern sliding windows feature precision-engineered track systems that make operation 
                smooth and easy. Many models include lift-out sashes for convenient cleaning from inside 
                your McKinney home.
              </p>

              <h3>Contemporary Style</h3>
              <p>
                The horizontal lines of sliding windows complement contemporary and modern architectural 
                styles. They&apos;re increasingly popular in new construction and renovations throughout 
                McKinney and Collin County.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore sliding window options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Sliding Windows">
                    <option value="Sliding Windows">Sliding Windows</option>
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

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Sliding Window Consultation</h2>
          <p>Experience the modern functionality of sliding windows. Contact us today.</p>
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
