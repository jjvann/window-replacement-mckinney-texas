import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Special Shape Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Custom special shape window replacement in McKinney, TX. Arched, circular, geometric, and custom-shaped windows. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'special shape windows McKinney TX, arched windows, circular windows, custom windows McKinney, geometric windows',
}

export default function SpecialShapeWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'special-shape-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Special Shape Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Special Shape Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                From graceful arches to geometric designs, specialty windows add distinctive character 
                to McKinney homes. Our craftsmen expertly install circles, ovals, trapezoids, and custom 
                shapes that complement your home&apos;s unique architecture.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Arches, Circles &amp; Ovals</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Geometric Shapes</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Architectural Accents</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made to Order</span>
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
                src="/images/services/special-shape-windows/special-shape-window1.jpeg"
                alt="Premium special shape windows installed in McKinney homes"
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
              <h2>Unique Character for Your Home</h2>
              <p>
                Special shape windows are the finishing touch that sets your McKinney home apart. Whether 
                you&apos;re replacing existing architectural windows or adding new accent pieces, these custom 
                windows make a statement that rectangular windows simply can&apos;t match.
              </p>

              <h3>Popular Special Shapes</h3>
              <p>
                <strong>Arched Windows:</strong> Add elegant curves above doors, standard windows, or as 
                standalone accents. Available in half-round, quarter-round, and elliptical configurations.
              </p>
              <p>
                <strong>Circles and Ovals:</strong> Perfect for gable ends, bathrooms, and wherever you 
                want to make a bold architectural statement.
              </p>
              <p>
                <strong>Geometric Shapes:</strong> Trapezoids, pentagons, triangles, and octagons add 
                interest to entryways, stairwells, and contemporary designs.
              </p>

              <h3>Custom Manufacturing</h3>
              <p>
                Every special shape window is made to order. Andersen, Pella, JELD-WEN, and Marvin all 
                offer extensive custom capabilities, ensuring we can match virtually any shape your 
                McKinney home requires.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to discuss custom special shape windows for your home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Special Shape Windows">
                    <option value="Special Shape Windows">Special Shape Windows</option>
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
          <h2>Schedule Your Free Special Shape Window Consultation</h2>
          <p>Add unique character to your McKinney home. Contact us today.</p>
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
