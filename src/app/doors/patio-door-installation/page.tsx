import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Patio Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium patio door replacement in McKinney, TX. Sliding and hinged patio doors for seamless indoor-outdoor living. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'patio doors McKinney TX, patio door replacement, sliding patio doors, hinged patio doors McKinney',
}

export default function PatioDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'patio-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Patio Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Patio Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Connect your indoor and outdoor living spaces with beautiful, functional patio doors. 
                Whether you prefer sliding or hinged operation, our premium doors from Andersen, Pella, 
                JELD-WEN, and Marvin make the transition seamless.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Seamless Indoor-Outdoor Flow</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Multiple Operation Styles</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Star Certified</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Enhanced Security Options</span>
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
                src="/doors/patio-doors-mckinney-tx.avif"
                alt="Patio door replacement services in McKinney, TX"
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
              <h2>Embrace Indoor-Outdoor Living</h2>
              <p>
                McKinney&apos;s beautiful weather makes outdoor living spaces essential. The right patio door 
                creates a seamless connection between your indoor rooms and your deck, patio, or backyard 
                oasis.
              </p>

              <h3>Sliding Patio Doors</h3>
              <p>
                The classic choice for patio access, sliding doors operate on smooth tracks without 
                requiring swing clearance. They&apos;re ideal for spaces where furniture placement or foot 
                traffic patterns make hinged doors impractical.
              </p>

              <h3>Hinged Patio Doors</h3>
              <p>
                For a more traditional look, hinged patio doors swing open like standard doors. Single 
                and double configurations are available, with options for inswing or outswing operation.
              </p>

              <h3>Multi-Slide and Pocket Doors</h3>
              <p>
                For the ultimate in indoor-outdoor connection, consider multi-panel sliding systems that 
                stack or pocket completely out of the way, creating wide openings that blur the line 
                between inside and outside.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to explore patio door options for your McKinney home.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Patio Doors">
                    <option value="Patio Doors">Patio Doors</option>
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
          <h2>Schedule Your Free Patio Door Consultation</h2>
          <p>Connect your indoor and outdoor spaces. Contact us today.</p>
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
