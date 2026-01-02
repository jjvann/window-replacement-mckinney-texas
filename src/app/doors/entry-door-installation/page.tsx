import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Entry Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium entry door replacement in McKinney, TX. Front doors that make a statement. Expert installation of Andersen, Pella & JELD-WEN entry doors. Free estimates. Call 945-206-3998.',
  keywords: 'entry doors McKinney TX, front door replacement, entry door installation, Andersen doors, Pella doors McKinney',
}

export default function EntryDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'entry-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Entry Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Entry Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Your front door is the first impression your McKinney home makes. Our premium entry doors 
                from Andersen, Pella, JELD-WEN, and Marvin combine stunning aesthetics with superior 
                security and energy efficiency.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Enhanced Security</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Efficient</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Designs Available</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Hardware Options</span>
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
                src="/doors/entry-doors-mckinney-tx.jpg"
                alt="Entry door replacement services in McKinney, TX"
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
              <h2>Make a Lasting First Impression</h2>
              <p>
                Your entry door sets the tone for your entire home. A beautiful, well-crafted front door 
                welcomes guests, provides security, and adds significant curb appeal to your McKinney property.
              </p>
              <p>
                Our entry doors come in a wide variety of styles, from classic panel designs to contemporary 
                flush doors, with options in fiberglass, steel, and wood. Each material offers unique 
                benefits for Texas homes.
              </p>

              <h3>Material Options</h3>
              <p>
                <strong>Fiberglass:</strong> The most popular choice for Texas homes, fiberglass entry doors 
                resist warping, cracking, and rotting while offering excellent insulation and low maintenance.
              </p>
              <p>
                <strong>Steel:</strong> Maximum security at an accessible price point. Modern steel doors 
                feature foam cores for improved insulation and factory finishes that resist rust.
              </p>
              <p>
                <strong>Wood:</strong> Unmatched warmth and character for homeowners who want the authentic 
                beauty of natural wood. Available with protective finishes for Texas climate durability.
              </p>

              <h3>Security Features</h3>
              <p>
                Today&apos;s entry doors incorporate advanced security features including multi-point locking 
                systems, reinforced strike plates, and impact-resistant glass options. We&apos;ll help you 
                choose the right combination for your McKinney home.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore entry door options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Entry Doors">
                    <option value="Entry Doors">Entry Doors</option>
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
          <h2>Schedule Your Free Entry Door Consultation</h2>
          <p>Transform your McKinney home&apos;s entrance. Contact us today.</p>
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
