import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { locationsData, siteConfig } from '@/data'
import styles from '../windows/windows.module.css'

export const metadata: Metadata = {
  title: 'Service Areas McKinney TX | Window Replacement Locations | Window Replacements of McKinney',
  description: 'Window and door replacement services throughout McKinney, Frisco, Allen, Plano, and Collin County. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement McKinney, Frisco windows, Allen TX windows, Plano window replacement, Collin County',
}

export default function LocationsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Service Areas</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Service Areas</span>
          <h1>Areas We Serve in <em>Collin County</em></h1>
          <p>Window Replacements of McKinney proudly serves homeowners throughout McKinney and the greater Collin County area. Our expert installation teams deliver premium window and door replacement services to the following communities.</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {locationsData.map((location) => (
              <article key={location.slug} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={location.image}
                    alt={`Window replacement in ${location.name}, TX`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h2><Link href={location.route}>{location.name}, TX</Link></h2>
                  <p>Professional window and door replacement services in {location.name}, Texas. Serving residential homeowners with premium installations from Andersen, Pella, JELD-WEN, and Marvin.</p>
                  <Link href={location.route} className={styles.serviceLink}>
                    Learn More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Local Service</span>
            <h2>Why Choose a Local Installer</h2>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Quick Response</h3>
              <p>Being local means we can respond quickly to service calls and warranty requests.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Community Knowledge</h3>
              <p>We understand the unique needs of North Texas homes and the local climate challenges.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Local Reputation</h3>
              <p>Our reputation in the community matters to us. We deliver quality every time.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Easy Communication</h3>
              <p>Reach us easily by phone for questions, updates, or service needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Get Started?</h2>
          <p>Contact us today for a free estimate on window and door replacement in your area.</p>
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
