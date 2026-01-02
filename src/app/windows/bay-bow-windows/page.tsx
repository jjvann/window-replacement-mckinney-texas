import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Bay & Bow Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium bay and bow window replacement in McKinney, TX. Dramatic architectural impact with expanded interior space. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'bay windows McKinney TX, bow windows, bay window installation, architectural windows McKinney',
}

export default function BayBowWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'bay-bow-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Bay &amp; Bow Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Bay &amp; Bow Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Add dramatic dimension to your McKinney home with stunning bay and bow window configurations. 
                These architectural statements create cozy nooks, expand living spaces, and become the focal 
                point of any room--all while increasing your home&apos;s value.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Dramatic Architectural Impact</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Increases Interior Space</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Multiple Ventilation Options</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Brand Options</span>
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
                src="/images/services/bay-bow-windows/bay-bow-window1.jpeg"
                alt="Premium bay and bow windows installed in McKinney homes"
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
              <h2>Architectural Drama for Your Home</h2>
              <p>
                Bay and bow windows project outward from your home&apos;s exterior wall, creating additional 
                interior space while adding dramatic curb appeal. These multi-panel configurations are 
                among the most transformative window upgrades you can make.
              </p>

              <h3>Bay vs. Bow: Understanding the Difference</h3>
              <p>
                <strong>Bay Windows:</strong> Typically feature three panels--a large center picture window 
                flanked by two angled side panels (usually casement or double-hung windows). The angled 
                construction creates a defined projection with clean architectural lines.
              </p>
              <p>
                <strong>Bow Windows:</strong> Feature four or more panels arranged in a gentle curve. The 
                result is a more subtle, rounded projection that works beautifully in living rooms, 
                master bedrooms, and formal dining areas.
              </p>

              <h3>Create a Cozy Nook</h3>
              <p>
                The interior space created by bay and bow windows is perfect for a window seat, breakfast 
                nook, or display area. Many McKinney homeowners add built-in seating or shelving to 
                maximize this bonus space.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore bay and bow window options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Bay & Bow Windows">
                    <option value="Bay & Bow Windows">Bay & Bow Windows</option>
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
          <h2>Schedule Your Free Bay &amp; Bow Window Consultation</h2>
          <p>Add architectural drama to your McKinney home. Contact us today.</p>
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
