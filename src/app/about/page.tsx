import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Us | Window Replacements of McKinney | McKinney TX',
  description: 'Learn about Window Replacements of McKinney. 15+ years serving Collin County with premium window and door replacement. Authorized Andersen, Pella, JELD-WEN & Marvin dealer.',
  keywords: 'about us, window company McKinney, window replacement company, McKinney TX windows',
}

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>About Us</span>
          <h1>About Window Replacements <em>of McKinney</em></h1>
          <p>For over 15 years, we&apos;ve been McKinney&apos;s trusted source for premium window and door replacement services, combining exceptional craftsmanship with unmatched customer service.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <div className={styles.imagePlaceholder}></div>
            </div>
            <div className={styles.storyContent}>
              <h2>Our Story</h2>
              <p>
                Window Replacements of McKinney was founded with a simple mission: to provide Collin County 
                homeowners with access to the finest replacement windows and doors in the industry, installed 
                with precision and backed by exceptional service.
              </p>
              <p>
                Over the years, we&apos;ve grown from a small local operation to one of the region&apos;s most 
                respected window and door specialists. Our growth has been built on a foundation of quality 
                workmanship, honest pricing, and genuine care for our customers and their homes.
              </p>
              <p>
                Today, we&apos;re proud to offer Andersen, Pella, JELD-WEN, and Marvin--America&apos;s most trusted
                window and door manufacturers. Our factory-certified installation teams bring decades of combined
                experience to every project, ensuring that your new windows and doors perform exactly as engineered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Difference</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>Factory-Certified Installers</h3>
              <p>Our installation teams are trained and certified by each manufacturer we represent. This ensures proper installation techniques and protects your warranty coverage.</p>
            </div>
            <div className={styles.feature}>
              <h3>Premium Brands Only</h3>
              <p>We exclusively work with Andersen, Pella, JELD-WEN, and Marvin--no cheap imports or off-brand products that won&apos;t stand the test of time.</p>
            </div>
            <div className={styles.feature}>
              <h3>Honest, Transparent Pricing</h3>
              <p>No high-pressure sales tactics, no hidden fees. We provide detailed written estimates so you know exactly what you&apos;re getting and what it costs.</p>
            </div>
            <div className={styles.feature}>
              <h3>Local Ownership</h3>
              <p>We live and work in the McKinney area. Our reputation in this community matters to us, and we stand behind every installation we complete.</p>
            </div>
            <div className={styles.feature}>
              <h3>Comprehensive Warranties</h3>
              <p>In addition to manufacturer warranties, we provide our own workmanship guarantee. If there&apos;s ever an issue, we make it right.</p>
            </div>
            <div className={styles.feature}>
              <h3>Clean, Professional Service</h3>
              <p>Our uniformed crews treat your home with respect. We protect your floors, clean up thoroughly, and leave your home better than we found it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Ready to Work With Us?</h2>
          <p>Contact us today for a free, no-obligation consultation on your window or door replacement project.</p>
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
