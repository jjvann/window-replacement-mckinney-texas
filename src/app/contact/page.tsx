import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact Us | Window Replacements of McKinney | McKinney TX',
  description: 'Contact Window Replacements of McKinney for a free estimate. Call 945-206-3998 or fill out our contact form.',
  keywords: 'contact, free estimate, window replacement quote, McKinney TX',
}

export default function ContactPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Get In Touch</span>
          <h1>Contact <em>Us</em></h1>
          <p>Ready to transform your McKinney home with new windows or doors? Contact us today for a free, no-obligation estimate.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <h2>Request Your Free Estimate</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" required placeholder="John Smith" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="(972) 555-0123" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Interested In *</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service...</option>
                    <optgroup label="Windows">
                      {windowServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Doors">
                      {doorServices.map((s) => (
                        <option key={s.slug} value={s.name}>{s.name}</option>
                      ))}
                    </optgroup>
                    <option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">Property Address *</label>
                  <input type="text" id="address" name="address" required placeholder="123 Main St, McKinney, TX 75070" />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="timeline">Project Timeline *</label>
                  <select id="timeline" name="timeline" required>
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="description">Project Description *</label>
                  <textarea id="description" name="description" rows={4} required placeholder="Tell us about your project - number of windows/doors, any specific concerns, etc."></textarea>
                </div>

                <button type="submit" className="btn-primary large">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>
                <div className={styles.infoItem}>
                  <strong>Phone</strong>
                  <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`}>{siteConfig.phone}</a>
                </div>
                <div className={styles.infoItem}>
                  <strong>Email</strong>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
                <div className={styles.infoItem}>
                  <strong>Address</strong>
                  <address>
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </address>
                </div>
                <div className={styles.infoItem}>
                  <strong>Hours</strong>
                  <p>{siteConfig.hours}</p>
                </div>
              </div>

              <div className={styles.mapWrapper}>
                <iframe
                  src={siteConfig.googleMapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteConfig.name} location map`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
