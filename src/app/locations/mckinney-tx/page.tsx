import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement McKinney TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in McKinney, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement McKinney TX, McKinney window installation, door replacement McKinney',
}

export default function McKinneyPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/locations">Locations</Link>
          <span>/</span>
          <span>McKinney, TX</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>McKinney, TX</em></h1>
              <p>As the heart of our service area, McKinney homeowners have trusted Window Replacements of McKinney for over 15 years. We&apos;re proud to serve our hometown with premium window and door installations from the industry&apos;s most respected brands.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-mckinney-tx-1.png"
                alt="Window replacement services in McKinney, TX"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>McKinney&apos;s Trusted Window Experts</h2>
              <p>
                McKinney is more than just our service area—it&apos;s our home. From the historic downtown 
                square to the newest developments in Stonebridge Ranch and Trinity Falls, we understand 
                the unique needs of McKinney homes and the families who live in them.
              </p>
              <p>
                Our team of factory-certified installers specializes in replacing windows and doors 
                throughout McKinney&apos;s diverse neighborhoods. Whether you have a charming Craftsman 
                in the historic district or a modern home in Craig Ranch, we have the expertise to 
                enhance your home&apos;s beauty, comfort, and energy efficiency.
              </p>

              <h3>Why McKinney Homeowners Choose Us</h3>
              <ul>
                <li>Local ownership with 15+ years serving McKinney</li>
                <li>Factory-certified installers for Andersen, Pella, JELD-WEN, and Marvin</li>
                <li>Quick response times—we&apos;re right here in McKinney</li>
                <li>Deep understanding of local building requirements</li>
                <li>Relationships with local HOAs throughout McKinney neighborhoods</li>
              </ul>

              <h3>Neighborhoods We Serve in McKinney</h3>
              <p>
                Our installation teams work throughout all McKinney neighborhoods, including:
              </p>
              <ul>
                <li>Stonebridge Ranch</li>
                <li>Craig Ranch</li>
                <li>Trinity Falls</li>
                <li>Historic Downtown McKinney</li>
                <li>Eldorado & Eldorado Heights</li>
                <li>Tucker Hill</li>
                <li>Adriatica Village</li>
                <li>Westridge</li>
                <li>And every neighborhood in between</li>
              </ul>

              <h3>Understanding McKinney&apos;s Window Needs</h3>
              <p>
                North Texas weather presents unique challenges for windows. From scorching summer heat 
                to occasional severe storms, your windows need to perform in demanding conditions. 
                Our premium window and door products are specifically selected for their ability to 
                handle our climate while keeping your home comfortable and your energy bills manageable.
              </p>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h3>Get Your Free Estimate</h3>
                <p>Contact us today for a free, no-obligation estimate on window or door replacement in McKinney.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Call {siteConfig.phone}
                </a>
              </div>
              <div className={styles.sidebarCard}>
                <h3>Our McKinney Address</h3>
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

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Services</span>
            <h2>Window &amp; Door Services in McKinney</h2>
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

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Transform Your McKinney Home?</h2>
          <p>Contact us today for a free estimate on window and door replacement.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large cta-button">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
