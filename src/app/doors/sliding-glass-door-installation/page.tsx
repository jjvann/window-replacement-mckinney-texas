import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Sliding Glass Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium sliding glass door replacement in McKinney, TX. Space-saving doors with expansive glass panels. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'sliding glass doors McKinney TX, sliding door replacement, glass doors McKinney, patio sliding doors',
}

export default function SlidingGlassDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'sliding-glass-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Sliding Glass Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Sliding Glass Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Maximize your views and natural light with sleek sliding glass doors. These space-saving 
                doors operate smoothly on precision tracks, providing easy access to patios, decks, and 
                outdoor living areas.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Space-Saving Design</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Expansive Glass Panels</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Smooth Track Operation</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Star Certified</span>
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
              <Image
                src="/doors/sliding-glass-doors-mckinney-tx.avif"
                alt="Sliding glass door replacement services in McKinney, TX"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>The Perfect Patio Access Solution</h2>
              <p>
                Sliding glass doors remain one of the most popular choices for patio access in McKinney 
                homes. Their horizontal operation requires no swing clearance, making them ideal for 
                spaces where furniture or foot traffic patterns make hinged doors impractical.
              </p>

              <h3>Modern Track Systems</h3>
              <p>
                Today&apos;s sliding glass doors feature precision-engineered track systems that make 
                operation smooth and effortless. Multi-point locking systems provide security without 
                compromising ease of use.
              </p>

              <h3>Energy Efficiency</h3>
              <p>
                Premium sliding glass doors from Andersen, Pella, JELD-WEN, and Marvin feature Low-E 
                glass and quality weatherstripping to minimize heat transfer and reduce energy costs 
                in your McKinney home.
              </p>

              <h3>Configuration Options</h3>
              <p>
                Two-panel, three-panel, and four-panel configurations are available to fit openings of 
                various widths. Some models offer panels that slide in opposite directions for wider 
                access openings.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore sliding glass door options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Sliding Glass Doors">
                    <option value="Sliding Glass Doors">Sliding Glass Doors</option>
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
                  {doorServices.map((service) => (
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
          <h2>Schedule Your Free Sliding Glass Door Consultation</h2>
          <p>Maximize your views with beautiful sliding glass doors. Contact us today.</p>
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
