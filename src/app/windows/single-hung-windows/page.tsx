import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Single-Hung Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Affordable single-hung window replacement in McKinney, TX. Traditional style with fixed upper sash. Expert installation of Andersen, Pella & JELD-WEN single-hung windows. Free estimates.',
  keywords: 'single-hung windows McKinney TX, replacement single-hung windows, affordable windows McKinney, JELD-WEN single-hung',
}

export default function SingleHungWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'single-hung-windows')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Single-Hung Windows</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Single-Hung Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                An economical yet elegant solution perfect for budget-conscious McKinney homeowners. 
                Single-hung windows feature a fixed upper sash and operable lower sash, providing 
                reliable ventilation while maximizing your replacement window investment.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Cost-Effective Option</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Simple, Reliable Operation</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Maintenance Access</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Energy Star Certified</span>
                </div>
              </div>
              <div className={styles.heroCta}>
                <Link href="/contact" className="btn-primary large">Get Your Free Estimate</Link>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-secondary large">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                src="/images/services/single-hung-windows/single-hung-window1.jpeg"
                alt="Premium single-hung windows installed in McKinney homes"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>The Smart Choice for <em>Value-Conscious Homeowners</em></h2>
              <p>
                Single-hung windows offer the classic look and feel of traditional windows at a more 
                accessible price point. With a fixed upper sash and an operable lower sash that slides 
                vertically, these windows provide reliable ventilation for McKinney homes while keeping 
                costs manageable.
              </p>
              <p>
                The simpler mechanism means fewer moving parts, which translates to excellent long-term 
                durability and lower maintenance requirements. For homeowners who want quality windows 
                without breaking the budget, single-hung windows from Andersen, Pella, JELD-WEN, and 
                Marvin deliver exceptional value.
              </p>

              <h3>Energy Efficiency Without Compromise</h3>
              <p>
                Don&apos;t let the economical price fool you--modern single-hung windows from our premium 
                brands feature the same advanced glass packages and weatherstripping systems as their 
                double-hung counterparts. Low-E coatings, argon gas fills, and warm-edge spacer 
                technology all work together to keep your McKinney home comfortable year-round.
              </p>

              <h3>Perfect Applications</h3>
              <p>
                Single-hung windows are ideal for bedrooms, living rooms, and any area where you don&apos;t 
                need to clean windows from inside. They&apos;re particularly popular for ground-floor 
                installations where exterior cleaning is straightforward.
              </p>

              <h2>Ready for Your Free Estimate?</h2>
              <p>
                Contact us today to learn more about single-hung window options for your McKinney home. 
                Our experts will help you find the perfect balance of quality and value.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Single-Hung Windows">
                    <option value="Single-Hung Windows">Single-Hung Windows</option>
                  </select>
                  <input type="text" name="address" placeholder="Property Address *" required />
                  <select name="timeline" required>
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                  <textarea name="description" placeholder="Project Description *" rows={3} required></textarea>
                  <button type="submit" className="btn-primary">Get Free Estimate</button>
                </form>
              </div>

              <div className={styles.sidebarCard}>
                <h4>Related Services</h4>
                <ul className={styles.relatedLinks}>
                  {windowServices.slice(0, 4).map((service) => (
                    <li key={service.slug}>
                      <Link href={service.route}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.highlight}`}>
                <h4>Why Choose Us?</h4>
                <ul className={styles.checkList}>
                  <li>Factory-certified installers</li>
                  <li>15+ years serving McKinney</li>
                  <li>Lifetime warranty protection</li>
                  <li>Financing available</li>
                </ul>
              </div>

              <div className={`${styles.sidebarCard} ${styles.ctaCard}`}>
                <h4>Ready to Get Started?</h4>
                <p>Call us today for your free consultation.</p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary">
                  Call {siteConfig.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Single-Hung Window <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>How much do single-hung windows cost?</summary>
              <p>Single-hung windows typically cost $300-$600 per window installed, making them one of the most affordable replacement window options available.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Are single-hung windows as energy efficient as double-hung?</summary>
              <p>Yes! With fewer moving parts, single-hung windows often achieve excellent air-tightness. The same Low-E glass and weatherstripping technologies are available.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>When should I choose single-hung over double-hung?</summary>
              <p>Single-hung windows are ideal when budget is a priority, for ground-floor installations where exterior cleaning is easy, or in rooms where maximum ventilation isn&apos;t critical.</p>
            </details>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Single-Hung Window Consultation</h2>
          <p>Get quality windows at an affordable price. Contact us today for your free estimate.</p>
          <div className={styles.ctaButtons}>
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-secondary large">Request Online Estimate</Link>
          </div>
        </div>
      </section>
    </>
  )
}
