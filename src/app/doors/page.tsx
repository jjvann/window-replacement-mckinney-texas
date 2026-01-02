import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../windows/windows.module.css'

export const metadata: Metadata = {
  title: 'Door Replacement Services McKinney TX | Entry, Patio & French Doors | Window Replacements of McKinney',
  description: 'Complete door replacement services in McKinney, TX. Entry doors, patio doors, French doors, sliding glass doors, and storm doors from Andersen, Pella, JELD-WEN & Marvin. Free estimates.',
  keywords: 'door replacement McKinney TX, entry doors, patio doors, French doors, sliding doors, storm doors',
}

export default function DoorsPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Doors</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Door Replacement Services</span>
          <h1>Door Replacement in <em>McKinney, TX</em></h1>
          <p>From elegant entry doors to expansive sliding glass doors, we offer complete door replacement services for McKinney homes. Our expert installers work with premium brands including Andersen, Pella, JELD-WEN, and Marvin.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {doorServices.map((service) => (
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
            <h2>McKinney&apos;s Trusted Door Experts</h2>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Factory-Certified Installers</h3>
              <p>Our team is trained and certified to ensure every door installation meets the highest standards.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Premium Brands</h3>
              <p>We install doors from Andersen, Pella, JELD-WEN, and Marvin--America&apos;s most trusted manufacturers.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Energy Efficient</h3>
              <p>Our doors help reduce energy costs with superior insulation and weatherstripping.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Free Estimates</h3>
              <p>Get a detailed quote for your door replacement project at no cost or obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Replace Your Doors?</h2>
          <p>Contact us today for a free estimate on door replacement in McKinney and surrounding areas.</p>
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
