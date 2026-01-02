import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'French Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Elegant French door replacement in McKinney, TX. Classic double doors with glass panels. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'French doors McKinney TX, French door replacement, double doors, glass panel doors McKinney',
}

export default function FrenchDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'french-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>French Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>French Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Add timeless elegance to your McKinney home with classic French doors. These hinged 
                double doors with glass panels create beautiful transitions between rooms or to outdoor 
                spaces while flooding interiors with natural light.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Timeless Elegance</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Maximum Natural Light</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Interior &amp; Exterior Options</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Glass Options</span>
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
                src="/doors/french-doors-mckinney-tx.avif"
                alt="French door replacement services in McKinney, TX"
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
              <h2>Classic Beauty That Never Goes Out of Style</h2>
              <p>
                French doors have graced elegant homes for centuries, and their appeal remains as strong 
                as ever. The glass-paneled double door configuration creates a sense of openness and 
                grandeur that single doors simply cannot match.
              </p>

              <h3>Interior French Doors</h3>
              <p>
                Create elegant transitions between living spaces, home offices, or dining rooms. Interior 
                French doors allow light to flow between rooms while providing privacy when needed.
              </p>

              <h3>Exterior French Doors</h3>
              <p>
                Perfect for patios, balconies, and garden access. Exterior French doors from Andersen, 
                Pella, JELD-WEN, and Marvin feature enhanced weatherstripping and security hardware for 
                Texas conditions.
              </p>

              <h3>Glass Options</h3>
              <p>
                Choose from clear, frosted, or decorative glass patterns. Grille options range from 
                traditional divided lights to contemporary full-glass panels. Low-E coatings provide 
                energy efficiency without sacrificing views.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore French door options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="French Doors">
                    <option value="French Doors">French Doors</option>
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
          <h2>Schedule Your Free French Door Consultation</h2>
          <p>Add timeless elegance to your McKinney home. Contact us today.</p>
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
