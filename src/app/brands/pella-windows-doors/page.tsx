import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Pella Windows & Doors McKinney TX | Window Replacements of McKinney',
  description: 'Premium Pella windows and doors in McKinney, TX. Between-glass blinds, expert installation, factory warranties. Free estimates. Call 945-206-3998.',
  keywords: 'Pella windows McKinney TX, Pella doors, between-glass blinds, Pella McKinney',
}

export default function PellaPage() {
  const otherBrands = brandsData.filter(b => b.slug !== 'pella-windows-doors')
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
          <span>Pella Windows &amp; Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Partner</span>
              <h1>Pella Window &amp; Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Since 1925, Pella has been an industry leader in window and door innovation. Their 
                exclusive features like between-the-glass blinds and inView screens make Pella the 
                choice for McKinney homeowners who demand both style and functionality.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Between-Glass Blinds &amp; Shades</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>inView Transparent Screens</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Triple-Pane Options</span>
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
                src="/brands/pella-windows-mckinney-tx.jpg"
                alt="Pella windows and doors in McKinney, TX"
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
              <h2>Innovation That Makes Life Easier</h2>
              <p>
                Pella has built their reputation on developing features that make windows and doors 
                better for everyday life. Their between-the-glass blinds stay dust-free and protected 
                from damage, while their inView screens are 50% more transparent than standard screens.
              </p>

              <h3>Products We Install</h3>
              <p><strong>Windows:</strong> 150 Series, 250 Series, Lifestyle Series, and Reserve Series 
              in all standard styles plus custom shapes and sizes.</p>
              <p><strong>Doors:</strong> Entry doors, patio doors, storm doors, and multi-slide systems 
              in wood, fiberglass, and vinyl.</p>

              <h3>InsulShield Glass Technology</h3>
              <p>
                Pella&apos;s proprietary InsulShield glass packages offer multiple levels of energy 
                performance. The advanced Low-E coatings reduce UV transmission by up to 84%, 
                protecting your furniture and flooring from fading.
              </p>

              <h3>Warranty Coverage</h3>
              <p>
                Pella offers limited lifetime warranties on many products, covering everything from 
                glass seal failure to hardware defects. Your investment is protected for years to come.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore Pella windows and doors for your McKinney home.
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
                  <li>Authorized Pella dealer</li>
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
          <h2>Schedule Your Free Pella Consultation</h2>
          <p>Discover Pella&apos;s innovative features. Contact us today.</p>
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
