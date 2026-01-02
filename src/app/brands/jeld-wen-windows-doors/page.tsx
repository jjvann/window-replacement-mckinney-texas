import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'JELD-WEN Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'Quality windows and doors in McKinney, TX. Exceptional value, expert installation, factory warranties. Free estimates. Call 945-206-3998.',
  keywords: 'JELD-WEN windows McKinney TX, JELD-WEN doors, AuraLast wood, JELD-WEN McKinney',
}

export default function JeldWenPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'jeld-wen-windows-doors')
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
          <span>JELD-WEN Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>JELD-WEN Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                JELD-WEN combines exceptional quality with outstanding value, making premium replacement 
                windows and doors accessible to more McKinney families. Their AuraLast wood protection 
                and innovative designs deliver lasting performance.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Exceptional Value</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>AuraLast Wood Protection</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>20-Year Warranty</span>
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
                src="/brands/jeld-wen-windows-mckinney-tx.jpg"
                alt="JELD-WEN windows and doors in McKinney, TX"
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
              <h2>Premium Quality, Accessible Price</h2>
              <p>
                Since 1960, JELD-WEN has grown to become one of the world&apos;s largest window and door 
                manufacturers. Their focus on quality craftsmanship and efficient production means 
                McKinney homeowners can enjoy premium features without premium price tags.
              </p>

              <h3>Products We Install</h3>
              <p><strong>Windows:</strong> Premium Vinyl, Siteline Wood, W-2500 Wood, and Custom Wood 
              windows in all standard styles and custom configurations.</p>
              <p><strong>Doors:</strong> Entry doors, patio doors, and interior doors in fiberglass, 
              steel, and wood with extensive design options.</p>

              <h3>AuraLast Wood Technology</h3>
              <p>
                JELD-WEN&apos;s exclusive AuraLast pine treatment provides superior protection against water 
                damage and wood decay--critical for Texas&apos;s humid climate. The protection extends 
                throughout the wood, not just on the surface.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                JELD-WEN offers a comprehensive 20-year warranty on most products, demonstrating their 
                confidence in product durability. Glass seal failure, hardware defects, and material 
                flaws are all covered.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore JELD-WEN windows and doors for your McKinney home.
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
                  <li>Authorized JELD-WEN dealer</li>
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
          <h2>Schedule Your Free JELD-WEN Consultation</h2>
          <p>Get premium quality at an exceptional value. Contact us today.</p>
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
