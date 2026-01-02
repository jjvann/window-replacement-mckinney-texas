import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Plano TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Plano, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Plano TX, Plano window installation, door replacement Plano',
}

export default function PlanoPage() {
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
          <span>Plano, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Plano, TX</em></h1>
              <p>Trusted by Plano homeowners for premium window and door installations. From Willow Bend to Legacy West, we serve all of Plano with factory-certified expertise and exceptional service.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-plano-tx-2.jpg"
                alt="Window replacement services in Plano, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Plano&apos;s Premier Window Specialists</h2>
              <p>
                Plano is one of North Texas&apos;s most established and desirable communities. With its 
                mix of historic homes in Old Downtown Plano and modern residences throughout the 
                city, Plano homeowners need window experts who understand diverse architectural 
                requirements and high standards.
              </p>
              <p>
                Window Replacements of McKinney has been serving Plano families for over 15 years. 
                Our factory-certified installation teams bring expertise, precision, and respect 
                for your home to every project we complete.
              </p>

              <h3>Why Plano Homeowners Choose Us</h3>
              <ul>
                <li>15+ years serving Plano homeowners</li>
                <li>Factory-certified for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Experience with homes from every era</li>
                <li>Understanding of Plano&apos;s premium neighborhoods</li>
                <li>Industry-leading warranties</li>
              </ul>

              <h3>Neighborhoods We Serve in Plano</h3>
              <ul>
                <li>Willow Bend</li>
                <li>Legacy West</li>
                <li>Deerfield</li>
                <li>Preston Hollow</li>
                <li>Old Downtown Plano</li>
                <li>Kings Ridge</li>
                <li>Gleneagles</li>
                <li>Ridgeview Ranch</li>
                <li>And all Plano communities</li>
              </ul>

              <h3>Solutions for Every Plano Home</h3>
              <p>
                Whether you have a 1970s ranch that needs energy-efficient upgrades or a new build 
                that deserves premium window and door products, we have solutions that fit your 
                needs and budget. Our extensive product selection includes options for every 
                architectural style found in Plano.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Plano.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Plano From</h3>
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
            <h2>Window &amp; Door Services in Plano</h2>
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
          <h2>Ready to Transform Your Plano Home?</h2>
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
