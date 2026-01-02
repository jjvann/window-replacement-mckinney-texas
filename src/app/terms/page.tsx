import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data'
import styles from '../about/about.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service | Window Replacements of McKinney',
  description: 'Terms of Service for Window Replacements of McKinney. Please read these terms carefully before using our services.',
}

export default function TermsPage() {
  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Service</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Terms of Service</h1>
          <p>Last updated: January 2025</p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the website and services of {siteConfig.name}, you agree to be bound 
              by these Terms of Service. If you disagree with any part of these terms, you may not access 
              our website or use our services.
            </p>

            <h2>Services</h2>
            <p>
              {siteConfig.name} provides window and door replacement and installation services for 
              residential properties in McKinney, Texas and surrounding areas. All services are subject 
              to a written contract or estimate agreed upon by both parties.
            </p>

            <h2>Estimates and Pricing</h2>
            <p>
              Estimates provided are based on information available at the time of assessment. Final 
              pricing may vary based on actual conditions discovered during installation. We will 
              communicate any changes before proceeding with additional work.
            </p>

            <h2>Warranties</h2>
            <p>
              Our installations are covered by both manufacturer warranties and our workmanship warranty. 
              Specific warranty terms will be provided in your written contract. Warranties do not cover 
              damage caused by misuse, neglect, or acts of nature.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages arising from your use of our services, except as required by applicable law.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State 
              of Texas, without regard to its conflict of law provisions.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p>
              {siteConfig.name}<br />
              {siteConfig.address.full}<br />
              Phone: {siteConfig.phone}<br />
              Email: {siteConfig.email}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
