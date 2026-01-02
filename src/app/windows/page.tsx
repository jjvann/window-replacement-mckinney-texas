import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from './windows.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Services McKinney TX | All Window Styles | Window Replacements of McKinney',
  description: 'Complete window replacement services in McKinney, TX. Double-hung, casement, bay & bow, sliding, picture, and specialty windows from Andersen, Pella, JELD-WEN & Marvin. Free estimates.',
  keywords: 'window replacement McKinney TX, double-hung windows, casement windows, bay windows, sliding windows, picture windows',
}

export default function WindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Windows</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Window Replacement Services</span>
          <h1>Window Replacement in <em>McKinney, TX</em></h1>
          <p>From classic double-hung windows to dramatic bay and bow configurations, we offer the full spectrum of replacement window styles from Andersen, Pella, JELD-WEN, and Marvin to match your home&apos;s architecture and your lifestyle needs.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {windowServices.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={`${service.name} in McKinney, TX`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h2><Link href={service.route}>{service.name}</Link></h2>
                  <p>{service.shortDescription}</p>
                  <Link href={service.route} className={styles.serviceLink}>
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
            <span className={styles.sectionLabel}>Why Choose Us</span>
            <h2>McKinney&apos;s Trusted Window Experts</h2>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Factory-Certified Installers</h3>
              <p>Our team is trained and certified by Andersen, Pella, JELD-WEN, and Marvin to ensure every installation meets manufacturer specifications.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Lifetime Warranty</h3>
              <p>All our window installations come with comprehensive warranty coverage, giving you peace of mind for years to come.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Energy Star Certified</h3>
              <p>Our windows meet or exceed Energy Star requirements, helping you save up to 30% on heating and cooling costs.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Free Estimates</h3>
              <p>Schedule a no-obligation consultation and receive a detailed quote for your window replacement project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Replace Your Windows?</h2>
          <p>Contact us today for a free estimate on window replacement in McKinney and surrounding areas.</p>
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
