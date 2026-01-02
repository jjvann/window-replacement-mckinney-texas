import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Anna TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Anna, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Anna TX, Anna window installation, door replacement Anna',
}

export default function AnnaPage() {
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
          <span>Anna, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Anna, TX</em></h1>
              <p>Professional window and door installation for Anna homeowners. As this community continues to grow, we&apos;re here to serve with factory-certified expertise.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-anna-tx-1.png"
                alt="Window replacement services in Anna, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Anna&apos;s Window Replacement Professionals</h2>
              <p>
                Anna is experiencing remarkable growth as families discover its charm, 
                affordability, and strong community spirit. Whether you&apos;ve lived in 
                Anna for decades or just moved into one of the new developments, you 
                deserve window and door professionals who care about quality.
              </p>
              <p>
                Window Replacements of McKinney provides Anna homeowners with access to 
                the same premium products and expert installation available in the region&apos;s 
                larger cities. Our factory-certified teams deliver exceptional results 
                on every project.
              </p>

              <h3>Why Anna Homeowners Choose Us</h3>
              <ul>
                <li>Convenient service from nearby McKinney</li>
                <li>Factory-certified installers</li>
                <li>Experience with Anna&apos;s new developments</li>
                <li>Honest, straightforward pricing</li>
                <li>Comprehensive warranties</li>
              </ul>

              <h3>Communities We Serve in Anna</h3>
              <ul>
                <li>Hurricane Creek</li>
                <li>Anna Town Square</li>
                <li>Slayton Ranch</li>
                <li>Natural Springs</li>
                <li>Summit Parks</li>
                <li>And all Anna neighborhoods</li>
              </ul>

              <h3>Upgrade from Builder-Grade Windows</h3>
              <p>
                Many Anna homes feature builder-grade windows that were installed to 
                meet minimum code requirements. Upgrading to premium windows from 
                Andersen, Pella, JELD-WEN, or Marvin can dramatically improve your 
                home&apos;s comfort, energy efficiency, and curb appeal.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Anna.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Anna From</h3>
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
            <h2>Window &amp; Door Services in Anna</h2>
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
          <h2>Ready to Transform Your Anna Home?</h2>
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
