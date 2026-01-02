import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Prosper TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Prosper, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Prosper TX, Prosper window installation, door replacement Prosper',
}

export default function ProsperPage() {
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
          <span>Prosper, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Prosper, TX</em></h1>
              <p>Premium window and door installations for Prosper&apos;s beautiful homes. From Windsong Ranch to Light Farms, we bring factory-certified expertise to this thriving community.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-prosper-tx-1.jpg"
                alt="Window replacement services in Prosper, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Prosper&apos;s Trusted Window Experts</h2>
              <p>
                Prosper has transformed from a small town into one of North Texas&apos;s most desirable 
                communities. Known for its excellent schools, master-planned neighborhoods, and 
                family-friendly atmosphere, Prosper homeowners take pride in their homes—and 
                they deserve window and door solutions that reflect that pride.
              </p>
              <p>
                Window Replacements of McKinney serves Prosper with the same dedication to quality 
                and service that has made us the region&apos;s trusted window specialists. Our 
                factory-certified installers understand the high standards of Prosper homeowners.
              </p>

              <h3>Why Prosper Homeowners Choose Us</h3>
              <ul>
                <li>Close proximity for prompt service</li>
                <li>Factory-certified installers for premium brands</li>
                <li>Experience with Prosper&apos;s newer construction</li>
                <li>Understanding of master-planned community standards</li>
                <li>Comprehensive warranty protection</li>
              </ul>

              <h3>Neighborhoods We Serve in Prosper</h3>
              <ul>
                <li>Windsong Ranch</li>
                <li>Light Farms</li>
                <li>Whitley Place</li>
                <li>Lakewood at Brookhollow</li>
                <li>The Lakes of Prosper</li>
                <li>Gentle Creek</li>
                <li>Artesia</li>
                <li>Star Trail</li>
                <li>And all Prosper communities</li>
              </ul>

              <h3>Premium Solutions for New Construction</h3>
              <p>
                Many Prosper homes are newer construction, built with builder-grade windows that 
                may not perform to your expectations. Upgrading to premium windows from Andersen, 
                Pella, JELD-WEN, or Marvin can transform your home&apos;s comfort, appearance, and 
                energy efficiency.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Prosper.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Prosper From</h3>
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
            <h2>Window &amp; Door Services in Prosper</h2>
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
          <h2>Ready to Transform Your Prosper Home?</h2>
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
