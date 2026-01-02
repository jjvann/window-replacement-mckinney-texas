import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Fairview TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Fairview, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Fairview TX, Fairview window installation, door replacement Fairview',
}

export default function FairviewPage() {
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
          <span>Fairview, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Fairview, TX</em></h1>
              <p>Expert window and door installation for Fairview&apos;s distinguished homes. Our factory-certified teams deliver premium quality to this beautiful community.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-fairview-tx-1.jpg"
                alt="Window replacement services in Fairview, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Fairview&apos;s Window Replacement Experts</h2>
              <p>
                Fairview is known for its large, estate-style homes, excellent schools, 
                and quiet, upscale atmosphere. Homeowners here have high standards, 
                and Window Replacements of McKinney meets those standards with premium 
                products and exceptional craftsmanship.
              </p>
              <p>
                Located just minutes from Fairview, we provide responsive service 
                with the quality and attention to detail that Fairview homes require. 
                Our factory-certified installers have experience with the area&apos;s 
                custom and semi-custom homes.
              </p>

              <h3>Why Fairview Homeowners Choose Us</h3>
              <ul>
                <li>Just minutes away for prompt service</li>
                <li>Factory-certified for premium brands</li>
                <li>Experience with custom home requirements</li>
                <li>Respect for your property and landscaping</li>
                <li>Comprehensive warranty protection</li>
              </ul>

              <h3>Communities We Serve in Fairview</h3>
              <ul>
                <li>Heritage Ranch</li>
                <li>Greenwood</li>
                <li>Stacy Ridge</li>
                <li>Country Club Road Estates</li>
                <li>And all Fairview neighborhoods</li>
              </ul>

              <h3>Premium Solutions for Premium Homes</h3>
              <p>
                Fairview&apos;s homes deserve the best. That&apos;s why we exclusively work 
                with Andersen, Pella, JELD-WEN, and Marvin—brands known for exceptional 
                quality, beautiful designs, and long-term performance. We can match 
                any architectural style found in Fairview.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Fairview.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Fairview From</h3>
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
            <h2>Window &amp; Door Services in Fairview</h2>
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
          <h2>Ready to Transform Your Fairview Home?</h2>
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
