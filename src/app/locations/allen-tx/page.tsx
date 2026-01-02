import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Allen TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Allen, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Allen TX, Allen window installation, door replacement Allen',
}

export default function AllenPage() {
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
          <span>Allen, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Allen, TX</em></h1>
              <p>Expert window and door installation for Allen homeowners. From Twin Creeks to The Preserve at Allen, we deliver premium replacement services throughout this thriving community.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-allen-tx-1.webp"
                alt="Window replacement services in Allen, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Allen&apos;s Trusted Window Experts</h2>
              <p>
                Allen consistently ranks as one of the best places to live in Texas, and for good reason. 
                Its excellent schools, safe neighborhoods, and strong sense of community make it a 
                wonderful place to call home. At Window Replacements of McKinney, we&apos;re proud to 
                serve Allen homeowners with the same quality and care they expect from their community.
              </p>
              <p>
                Just minutes from our McKinney location, Allen homeowners enjoy quick service and 
                local expertise. Our factory-certified installation teams have completed hundreds 
                of projects throughout Allen&apos;s neighborhoods.
              </p>

              <h3>Why Allen Homeowners Choose Us</h3>
              <ul>
                <li>Minutes away from Allen for quick service</li>
                <li>Factory-certified installers for all major brands</li>
                <li>Extensive experience in Allen neighborhoods</li>
                <li>Familiar with local HOA guidelines</li>
                <li>Comprehensive warranties on all work</li>
              </ul>

              <h3>Neighborhoods We Serve in Allen</h3>
              <ul>
                <li>Twin Creeks</li>
                <li>The Preserve at Allen</li>
                <li>Waterford Parks</li>
                <li>Montgomery Farm</li>
                <li>Ridgeview</li>
                <li>Green Meadows</li>
                <li>Stone Bridge Ranch</li>
                <li>Allen Heights</li>
                <li>And all Allen communities</li>
              </ul>

              <h3>Premium Products for Allen Homes</h3>
              <p>
                Allen homes deserve the best. That&apos;s why we exclusively work with America&apos;s most 
                trusted window and door manufacturers: Andersen, Pella, JELD-WEN, and Marvin. Each 
                brand offers superior performance, beautiful designs, and comprehensive warranties 
                that protect your investment.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Allen.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Allen From</h3>
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
            <h2>Window &amp; Door Services in Allen</h2>
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
          <h2>Ready to Transform Your Allen Home?</h2>
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
