import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Princeton TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Princeton, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Princeton TX, Princeton window installation, door replacement Princeton',
}

export default function PrincetonPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/locations">Locations</Link>
          <span>/</span>
          <span>Princeton, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Princeton, TX</em></h1>
              <p>Quality window and door installation for Princeton homeowners. We bring premium products and factory-certified expertise to this growing community.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-princeton-tx-1.jpg"
                alt="Window replacement services in Princeton, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Princeton&apos;s Window Replacement Experts</h2>
              <p>
                Princeton is one of North Texas&apos;s fastest-growing communities, attracting 
                families with its affordable housing, excellent schools, and small-town 
                values. As Princeton grows, Window Replacements of McKinney is proud to 
                serve this community with premium window and door solutions.
              </p>
              <p>
                Our factory-certified installation teams bring the same quality and 
                professionalism to Princeton that has made us trusted throughout 
                Collin County. We understand the needs of growing families and 
                provide solutions that enhance comfort and value.
              </p>

              <h3>Why Princeton Homeowners Choose Us</h3>
              <ul>
                <li>Close proximity for quick response</li>
                <li>Factory-certified installers</li>
                <li>Experience with Princeton developments</li>
                <li>Competitive, fair pricing</li>
                <li>Strong warranty coverage</li>
              </ul>

              <h3>Communities We Serve in Princeton</h3>
              <ul>
                <li>Greystone</li>
                <li>Village on the Green</li>
                <li>South Fork Ranch</li>
                <li>Trailwood</li>
                <li>And all Princeton neighborhoods</li>
              </ul>

              <h3>Energy Savings for Princeton Homes</h3>
              <p>
                With Texas energy costs rising, energy-efficient windows and doors 
                can make a real difference in your monthly bills. Our premium products 
                feature advanced glazing technology that keeps your home comfortable 
                while reducing your energy consumption.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Princeton.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Princeton From</h3>
                <p>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
                <p><strong>Hours:</strong><br />{siteConfig.hours}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Services</span>
            <h2>Window &amp; Door Services in Princeton</h2>
          </div>
          <div className={styles.servicesGrid}>
            {windowServices.map((service) => (
              <div key={service.slug} className={styles.serviceCard}>
                <h3><Link href={service.route}>{service.name}</Link></h3>
                <p>{service.shortDescription}</p>
              </div>
            ))}
            {doorServices.map((service) => (
              <div key={service.slug} className={styles.serviceCard}>
                <h3><Link href={service.route}>{service.name}</Link></h3>
                <p>{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Princeton Home?</h2>
          <p>Contact us today for a free estimate on window and door replacement.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
