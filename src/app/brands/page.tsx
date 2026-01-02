import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { brandsData, siteConfig } from '@/data'
import styles from '../windows/windows.module.css'

export const metadata: Metadata = {
  title: 'Window & Door Brands McKinney TX | Andersen, Pella, JELD-WEN & Marvin | Window Replacements of McKinney',
  description: 'Authorized dealer for Andersen, Pella, JELD-WEN, and Marvin windows and doors in McKinney, TX. Premium brands, expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'Andersen windows McKinney, Pella windows McKinney, JELD-WEN windows, Marvin windows, window brands McKinney TX',
}

export default function BrandsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Brands</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Premium Window &amp; Door Brands</span>
          <h1>Our Brands in <em>McKinney, TX</em></h1>
          <p>We bring McKinney homeowners exclusive access to Andersen, Pella, JELD-WEN, and Marvin--brands renowned for quality, innovation, and lasting performance.</p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {brandsData.map((brand) => (
              <article key={brand.slug} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={brand.image}
                    alt={`${brand.name} in McKinney, TX`}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h2><Link href={brand.route}>{brand.name}</Link></h2>
                  <p>{brand.description.substring(0, 150)}...</p>
                  <Link href={brand.route} className={styles.serviceLink}>
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
            <span className={styles.sectionLabel}>Why These Brands</span>
            <h2>Quality You Can Trust</h2>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefit}>
              <h3>Industry Leaders</h3>
              <p>These manufacturers have set the standard for window and door quality for over a century.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Energy Efficient</h3>
              <p>All brands offer Energy Star certified products that reduce heating and cooling costs.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Comprehensive Warranties</h3>
              <p>From 20 years to lifetime coverage, these brands stand behind their products.</p>
            </div>
            <div className={styles.benefit}>
              <h3>Made in USA</h3>
              <p>Support American manufacturing with products made right here in the United States.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Explore Your Options?</h2>
          <p>Contact us for a free consultation and see samples from all our premium brands.</p>
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
