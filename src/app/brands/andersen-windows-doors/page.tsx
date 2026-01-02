import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Andersen Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'Premium Andersen windows and doors in McKinney, TX. Fibrex technology, expert installation, factory warranties. Free estimates. Call 945-206-3998.',
  keywords: 'Andersen windows McKinney TX, Andersen doors, Fibrex windows, Andersen McKinney',
}

export default function AndersenPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'andersen-windows-doors')
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/brands">Brands</Link>
          <span>/</span>
          <span>Andersen Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>Andersen Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                For over 120 years, Andersen has set the standard for window and door excellence. We bring you
                exclusive access to their innovative Fibrex technology and comprehensive product line.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Patented Fibrex Composite</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Industry-Leading Warranties</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made in USA</span>
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
                src="/brands/andersen-windows-mckinney-tx.jpg"
                alt="Andersen windows and doors in McKinney, TX"
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
              <h2>Why McKinney Homeowners Choose Andersen</h2>
              <p>
                Since 1903, Andersen has been synonymous with window excellence. Their commitment to 
                innovation has produced breakthrough technologies like Fibrex--a composite material that 
                combines the strength of wood with the low-maintenance benefits of vinyl.
              </p>

              <h3>Products We Install</h3>
              <p><strong>Windows:</strong> 100 Series, 200 Series, 400 Series, A-Series, and E-Series in 
              double-hung, casement, awning, sliding, bay, bow, and specialty shapes.</p>
              <p><strong>Doors:</strong> Hinged patio doors, sliding patio doors, contemporary folding doors, 
              and entry doors in various styles and finishes.</p>

              <h3>The Fibrex Advantage</h3>
              <p>
                Andersen&apos;s exclusive Fibrex material is twice as strong as vinyl and won&apos;t rot, flake, 
                peel, blister, or corrode. It provides excellent thermal performance and maintains its 
                beauty for decades with minimal maintenance.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                Andersen stands behind their products with comprehensive warranty coverage. The 400 Series, 
                for example, includes a 20-year limited warranty on glass and a 10-year limited warranty 
                on non-glass parts.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore Andersen windows and doors for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required>
                    <option value="">Select a service...</option>
                    <optgroup label="Windows">
                      {windowServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Doors">
                      {doorServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
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
                <h4>Other Brands</h4>
                <ul className={styles.relatedLinks}>
                  {otherBrands.map((brand) => (
                    <li key={brand.slug}>
                      <Link href={brand.route}>{brand.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.highlight}`}>
                <h4>Why Choose Us?</h4>
                <ul className={styles.checkList}>
                  <li>Authorized Andersen dealer</li>
                  <li>Factory-certified installers</li>
                  <li>15+ years serving McKinney</li>
                  <li>Financing available</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Andersen Consultation</h2>
          <p>Experience the Andersen difference. Contact us today.</p>
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
