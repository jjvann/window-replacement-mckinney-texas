import { Metadata } from 'next'
import Link from 'next/link'
import { servicesData, siteConfig } from '@/data'
import styles from '../service.module.css'

export const metadata: Metadata = {
  title: 'Double-Hung Window Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Premium double-hung window replacement in McKinney, TX. Tilt-in cleaning, dual-sash operation. Expert installation of Andersen, Pella & JELD-WEN double-hung windows. Free estimates. Call 945-206-3998.',
  keywords: 'double-hung windows McKinney TX, replacement double-hung windows, Andersen double-hung, Pella double-hung windows, JELD-WEN windows McKinney',
}

export default function DoubleHungWindowsPage() {
  const windowServices = servicesData.filter(s => s.category === 'Windows' && s.slug !== 'double-hung-windows')

  return (
    <>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/windows">Windows</Link>
          <span>/</span>
          <span>Double-Hung Windows</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Window Replacement</span>
              <h1>Double-Hung Window Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                Experience the perfect blend of timeless elegance and modern functionality with premium 
                double-hung replacement windows from Andersen, Pella, JELD-WEN, and Marvin. Our expertly 
                installed double-hung windows bring unmatched versatility, effortless maintenance, and 
                superior energy performance to McKinney homes.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Both Sashes Operate &amp; Tilt Inward</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Easy Cleaning from Inside</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Superior Ventilation Control</span>
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
                src="/images/services/double-hung-windows/double-hung-window1.jpeg"
                alt="Premium double-hung windows installed in McKinney homes"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Why Double-Hung Windows Are <em>McKinney&apos;s First Choice</em></h2>
              <p>
                Double-hung windows have earned their place as the most popular replacement window style in 
                McKinney and throughout North Texas. These versatile windows feature two operable sashes that 
                slide vertically within the frame, with both the upper and lower sections capable of independent 
                movement. This distinctive design delivers unparalleled flexibility in ventilation control while 
                maintaining the classic aesthetic that complements virtually every architectural style.
              </p>
              <p>
                What truly sets premium double-hung windows apart is their revolutionary tilt-in cleaning feature. 
                Both sashes pivot inward with a simple release mechanism, allowing you to clean the exterior glass 
                surfaces safely from inside your McKinney home--no more precarious ladders or professional window 
                washing services.
              </p>

              <h3>The Engineering Behind Superior Performance</h3>
              <p>
                Today&apos;s double-hung replacement windows represent over a century of continuous refinement in 
                window engineering. The dual-sash operation isn&apos;t just about convenience--it&apos;s a sophisticated 
                ventilation system that harnesses the natural principles of air circulation. By opening the bottom 
                sash, you welcome cool, fresh air into your McKinney home. Simultaneously opening the top sash 
                allows warm air to escape at ceiling level.
              </p>

              <h3>Energy Efficiency That Pays You Back</h3>
              <p>
                McKinney homeowners consistently tell us that energy savings motivated their decision to replace 
                old windows, and double-hung windows deliver impressive results. Modern double-hung windows employ 
                multiple technologies working in concert: Low-E glass coatings reflect infrared light, keeping summer 
                heat outside while retaining winter warmth inside.
              </p>
              <p>
                A typical McKinney home replacing 15-20 single-pane windows with Energy Star certified double-hung 
                windows can expect to reduce heating and cooling costs by 25-35% annually.
              </p>

              <h3>Premium Brands We Install</h3>
              <p>
                <strong>Andersen 400 Series Double-Hung:</strong> Andersen&apos;s flagship product combines their patented 
                Fibrex composite frame material with Low-E4 SmartSun glass for exceptional energy performance.
              </p>
              <p>
                <strong>Pella 250 Series Double-Hung:</strong> Pella&apos;s vinyl double-hung windows deliver outstanding 
                value without compromising quality. Their exclusive InsulShield Low-E glass reduces UV light 
                transmission by up to 84%.
              </p>
              <p>
                <strong>JELD-WEN Premium Vinyl Double-Hung:</strong> JELD-WEN&apos;s double-hung windows feature their 
                innovative ScreenMaximizer hidden screen system that increases visible glass area by 15%.
              </p>

              <h2>Ready to Transform Your <em>McKinney Home?</em></h2>
              <p>
                Contact us today to schedule your free double-hung window consultation. Our experts will assess 
                your current windows, discuss your goals, and provide accurate measurements with a detailed 
                written estimate.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Double-Hung Windows">
                    <option value="Double-Hung Windows">Double-Hung Windows</option>
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

      {/* FAQ */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Double-Hung Window <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>How much do double-hung replacement windows cost in McKinney?</summary>
              <p>Double-hung replacement window costs typically range from $400-$800 per window installed, depending on the size, brand, and features selected. We provide detailed written estimates with no hidden fees.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>What&apos;s the difference between double-hung and single-hung windows?</summary>
              <p>Both window styles look similar, but double-hung windows have two operable sashes (both top and bottom move), while single-hung windows have only a movable bottom sash. Double-hung windows offer superior ventilation control and the tilt-in cleaning feature on both sashes.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>How long does double-hung window installation take?</summary>
              <p>Most double-hung window replacements take 30-45 minutes per window. A typical McKinney home with 10-12 windows can usually be completed in a single day.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Do double-hung windows require special maintenance?</summary>
              <p>Modern double-hung windows are remarkably low-maintenance. Simply clean the glass with standard window cleaner 2-3 times per year using the convenient tilt-in feature.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Double-Hung Window Consultation</h2>
          <p>Experience the Window Replacements of McKinney difference. Our experts will assess your home and provide a detailed estimate--all at no cost.</p>
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
