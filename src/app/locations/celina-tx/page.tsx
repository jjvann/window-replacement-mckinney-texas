import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Celina TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Celina, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Celina TX, Celina window installation, door replacement Celina',
}

export default function CelinaPage() {
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
          <span>Celina, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Celina, TX</em></h1>
              <p>Premium window and door installation for Celina&apos;s growing community. From Light Farms to Carter Ranch, we deliver factory-certified expertise to every project.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-celina-tx.jpg"
                alt="Window replacement services in Celina, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Celina&apos;s Trusted Window Specialists</h2>
              <p>
                Celina has evolved from a quiet farming community into one of North 
                Texas&apos;s most sought-after addresses. Its master-planned communities, 
                excellent schools, and Texas charm attract families from across the 
                region—and these families deserve premium window and door solutions.
              </p>
              <p>
                Window Replacements of McKinney serves Celina with the same commitment 
                to quality that has earned us trust throughout Collin County. Our 
                factory-certified installers understand the standards of Celina&apos;s 
                fine homes.
              </p>

              <h3>Why Celina Homeowners Choose Us</h3>
              <ul>
                <li>Convenient service area coverage</li>
                <li>Factory-certified for premium brands</li>
                <li>Experience with Celina&apos;s newer homes</li>
                <li>Understanding of HOA requirements</li>
                <li>Industry-leading warranties</li>
              </ul>

              <h3>Neighborhoods We Serve in Celina</h3>
              <ul>
                <li>Light Farms (shared with Prosper)</li>
                <li>Carter Ranch</li>
                <li>Mustang Lakes</li>
                <li>Cambridge Crossing</li>
                <li>Sutton Fields</li>
                <li>Legacy Ranch</li>
                <li>And all Celina communities</li>
              </ul>

              <h3>Elevating Celina&apos;s Beautiful Homes</h3>
              <p>
                Celina&apos;s homes are designed to impress, and your windows and doors 
                should match. Our premium products from Andersen, Pella, JELD-WEN, 
                and Marvin offer the beauty, performance, and quality that Celina 
                homes deserve.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Celina.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Celina From</h3>
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
            <h2>Window &amp; Door Services in Celina</h2>
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
          <h2>Ready to Transform Your Celina Home?</h2>
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
