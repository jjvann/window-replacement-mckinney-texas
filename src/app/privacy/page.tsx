import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/data'
import styles from '../about/about.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy | Window Replacements of McKinney',
  description: 'Privacy Policy for Window Replacements of McKinney. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2025</p>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Introduction</h2>
            <p>
              {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways, including:</p>
            <p>
              <strong>Personal Data:</strong> When you request an estimate or contact us, we may collect 
              your name, email address, phone number, physical address, and details about your project.
            </p>
            <p>
              <strong>Derivative Data:</strong> Our servers automatically collect information when you 
              access the site, such as your IP address, browser type, operating system, access times, 
              and pages viewed.
            </p>

            <h2>Use of Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              <li>Respond to your inquiries and provide estimates</li>
              <li>Schedule and complete window and door installation services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share your information with:</p>
            <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisors such as lawyers and accountants</li>
              <li>Government authorities when required by law</li>
            </ul>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal 
              information. While we have taken reasonable steps to secure the information you provide, 
              please be aware that no security measures are perfect or impenetrable.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
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
