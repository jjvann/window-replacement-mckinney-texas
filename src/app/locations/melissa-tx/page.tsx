import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Melissa TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Melissa, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Melissa TX, Melissa window installation, door replacement Melissa',
}

export default function MelissaPage() {
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
          <span>Melissa, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Melissa, TX</em></h1>
              <p>Expert window and door installation for Melissa homeowners. This growing community deserves premium replacement services from factory-certified professionals.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-mckinney-tx-1.png"
                alt="Window replacement services in Melissa, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Melissa&apos;s Window Replacement Experts</h2>
              <p>
                Melissa represents the best of North Texas living—affordable housing, excellent 
                schools, and a small-town atmosphere with big-city convenience. As one of 
                the region&apos;s fastest-growing communities, Melissa homeowners need reliable 
                contractors who understand their needs.
              </p>
              <p>
                Window Replacements of McKinney is just a short drive from Melissa, providing 
                quick response times and local expertise. Our factory-certified installers 
                bring the same premium service to Melissa that has made us trusted throughout 
                Collin County.
              </p>

              <h3>Why Melissa Homeowners Choose Us</h3>
              <ul>
                <li>Nearby location for fast service</li>
                <li>Factory-certified for all premium brands</li>
                <li>Experience with Melissa&apos;s growing neighborhoods</li>
                <li>Fair, transparent pricing</li>
                <li>Strong warranty protection</li>
              </ul>

              <h3>Communities We Serve in Melissa</h3>
              <ul>
                <li>Lakeland</li>
                <li>Sierra Vista</li>
                <li>Melissa Town Center</li>
                <li>Preserve at Grayson Lakes</li>
                <li>Melissa Ridge</li>
                <li>And all Melissa neighborhoods</li>
              </ul>

              <h3>Quality Windows for Growing Families</h3>
              <p>
                Many Melissa families are in their first homes or growing into larger spaces. 
                We offer window and door solutions that fit various budgets while never 
                compromising on quality. Every product we install comes from a trusted 
                manufacturer with comprehensive warranty coverage.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Melissa.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Melissa From</h3>
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
            <h2>Window &amp; Door Services in Melissa</h2>
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
          <h2>Ready to Transform Your Melissa Home?</h2>
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
