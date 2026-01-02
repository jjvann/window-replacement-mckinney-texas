import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../location.module.css'

export const metadata: Metadata = {
  title: 'Window Replacement Lucas TX | Window Replacements of McKinney',
  description: 'Premium window and door replacement services in Lucas, TX. Factory-certified Andersen, Pella, JELD-WEN & Marvin installers. Free estimates. Call 945-206-3998.',
  keywords: 'window replacement Lucas TX, Lucas window installation, door replacement Lucas',
}

export default function LucasPage() {
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
          <span>Lucas, TX</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Service Area</span>
              <h1>Window Replacement in <em>Lucas, TX</em></h1>
              <p>Expert window and door installation for Lucas homeowners. From upscale estates to custom builds, we deliver premium replacement services throughout this exclusive community.</p>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/locations/window-replacement-lucas-tx-1.jpg"
                alt="Window replacement services in Lucas, TX"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainContent}>
              <h2>Lucas&apos;s Trusted Window Experts</h2>
              <p>
                Lucas is renowned for its luxury homes, scenic beauty, and exceptional quality of life.
                As one of North Texas&apos;s most prestigious communities, Lucas demands window solutions
                that match its high standards. At Window Replacements of McKinney, we specialize in
                serving Lucas homeowners with premium installations that enhance their investment.
              </p>
              <p>
                Located just minutes from our McKinney showroom, Lucas residents enjoy convenient access
                to our expertise. Our factory-certified teams have extensive experience with Lucas&apos;s
                custom homes and architectural requirements.
              </p>

              <h3>Lucas Window Replacement Services</h3>
              <p>
                Whether you&apos;re updating an existing Lucas home or outfitting a new construction project,
                our comprehensive window replacement services include:
              </p>
              <ul>
                <li>Premium brand windows (Andersen, Pella, JELD-WEN, Marvin)</li>
                <li>Energy-efficient Low-E glass options</li>
                <li>Custom sizes and configurations</li>
                <li>Professional installation with lifetime warranty</li>
                <li>Free in-home consultations and estimates</li>
              </ul>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.serviceCard}>
                <h3>Contact Us</h3>
                <p>Get your free Lucas window replacement estimate today.</p>
                <a href="tel:945-206-3998" className={styles.phoneLink}>
                  945-206-3998
                </a>
                <a href="/contact" className={styles.ctaButton}>
                  Request Free Estimate
                </a>
              </div>

              <div className={styles.serviceCard}>
                <h3>Why Choose Us in Lucas?</h3>
                <ul>
                  <li>Factory-certified installers</li>
                  <li>Premium brand warranties</li>
                  <li>Local McKinney expertise</li>
                  <li>Custom Lucas solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2>Lucas Window Services</h2>
          <div className={styles.servicesGrid}>
            {windowServices.map((service) => (
              <Link key={service.slug} href={service.route} className={styles.serviceCard}>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2>Lucas Door Services</h2>
          <div className={styles.servicesGrid}>
            {doorServices.map((service) => (
              <Link key={service.slug} href={service.route} className={styles.serviceCard}>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Transform Your Lucas Home</h2>
          <p>Join hundreds of satisfied Lucas homeowners who trust us with their window and door replacements.</p>
          <div className={styles.ctaButtons}>
            <a href="tel:945-206-3998" className={styles.primaryButton}>
              Call 945-206-3998
            </a>
            <a href="/contact" className={styles.secondaryButton}>
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}