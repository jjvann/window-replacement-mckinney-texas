import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Frisco TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Frisco, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Frisco TX, Frisco window installation, door replacement Frisco',
}

export default function FriscoPage() {
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
          <span>Frisco, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Frisco, TX</em></h1>
              <p>Serving Frisco homeowners with premium window and door installations. From Starwood to Phillips Creek Ranch, our factory-certified installers deliver exceptional quality throughout Frisco&apos;s finest neighborhoods.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-frisco-tx-1.jpg"
                alt="Window replacement services in Frisco, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Frisco&apos;s Premier Window Specialists</h2>
              <p>
                As one of America&apos;s fastest-growing cities, Frisco is home to some of North Texas&apos;s 
                most beautiful residences. From sprawling estates in Newman Village to modern homes in 
                Lawler Park, Frisco homeowners deserve window and door solutions that match their 
                home&apos;s quality and character.
              </p>
              <p>
                Window Replacements of McKinney has been serving Frisco families for over 15 years. 
                Our proximity means quick response times, and our experience means exceptional results 
                every time.
              </p>

              <h3>Why Frisco Homeowners Choose Us</h3>
              <ul>
                <li>Convenient service from nearby McKinney</li>
                <li>Factory-certified installers for premium brands</li>
                <li>Experience with Frisco&apos;s diverse architectural styles</li>
                <li>Understanding of local HOA requirements</li>
                <li>Comprehensive warranties on all installations</li>
              </ul>

              <h3>Neighborhoods We Serve in Frisco</h3>
              <ul>
                <li>Starwood</li>
                <li>Phillips Creek Ranch</li>
                <li>Newman Village</li>
                <li>Lawler Park</li>
                <li>The Trails</li>
                <li>Richwoods</li>
                <li>Plantation Resort</li>
                <li>Stonelake Estates</li>
                <li>And all Frisco communities</li>
              </ul>

              <h3>Energy Efficiency for Frisco Homes</h3>
              <p>
                Texas summers mean serious air conditioning bills. Our premium window and door products 
                feature advanced low-E coatings and insulating technology that can significantly reduce 
                your energy costs while keeping your Frisco home comfortable year-round.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in Frisco.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Serving Frisco From</h3>
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
            <h2>Window &amp; Door Services in Frisco</h2>
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
          <h2>Ready to Transform Your Frisco Home?</h2>
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
