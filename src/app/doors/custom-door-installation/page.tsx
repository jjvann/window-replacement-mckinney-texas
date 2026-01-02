import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { servicesData, siteConfig } from '@/data'
import styles from '../../windows/service.module.css'

export const metadata: Metadata = {
  title: 'Custom Door Replacement McKinney TX | Andersen, Pella & JELD-WEN | Window Replacements of McKinney',
  description: 'Custom door solutions in McKinney, TX. Unique sizes, shapes, and designs tailored to your home. Expert installation. Free estimates. Call 945-206-3998.',
  keywords: 'custom doors McKinney TX, custom door installation, unique doors, specialty doors McKinney',
}

export default function CustomDoorPage() {
  const doorServices = servicesData.filter(s => s.category === 'Doors' && s.slug !== 'custom-door-installation')

  return (
    <>
      <nav className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/doors">Doors</Link>
          <span>/</span>
          <span>Custom Doors</span>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <span className={styles.sectionLabel}>Premium Door Replacement</span>
              <h1>Custom Door Replacement in <em>McKinney, TX</em></h1>
              <p className={styles.lead}>
                When standard doors won&apos;t do, our custom door solutions deliver exactly what your 
                McKinney home needs. From unique sizes to specialty shapes and one-of-a-kind designs, 
                we work with Andersen, Pella, JELD-WEN, and Marvin to create the perfect door.
              </p>
              <div className={styles.heroFeatures}>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Custom Sizes &amp; Shapes</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Unique Design Options</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Made to Your Specifications</span>
                </div>
                <div className={styles.heroFeature}>
                  <span className={styles.featureIcon}>Y</span>
                  <span>Premium Materials</span>
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
              <Image
                src="/doors/custom-doors-mckinney-tx.jpg"
                alt="Custom door replacement services in McKinney, TX"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.content}>
              <h2>Your Vision, Expertly Crafted</h2>
              <p>
                Some homes require doors that simply aren&apos;t available off the shelf. Whether you&apos;re 
                dealing with non-standard opening sizes, unique architectural requirements, or you 
                simply want something truly one-of-a-kind, custom doors are the answer.
              </p>

              <h3>Custom Size Solutions</h3>
              <p>
                Older McKinney homes often have doorways that don&apos;t match today&apos;s standard dimensions. 
                Rather than modifying your home&apos;s structure, we can order doors built to your exact 
                specifications.
              </p>

              <h3>Unique Shapes and Configurations</h3>
              <p>
                Arched tops, sidelights, transoms, and multi-door configurations are all possible with 
                our custom door program. We&apos;ll work with you to design a door system that perfectly 
                fits your home&apos;s architecture.
              </p>

              <h3>Premium Materials and Finishes</h3>
              <p>
                Choose from a wide range of wood species, fiberglass textures, hardware finishes, and 
                glass options to create a door that&apos;s uniquely yours.
              </p>

              <h2>Ready for Your Free Consultation?</h2>
              <p>
                Contact us today to discuss your custom door project. Our design team will help bring 
                your vision to life.
              </p>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Request Free Estimate</h4>
                <form className={styles.sidebarForm}>
                  <input type="text" name="fullName" placeholder="Full Name *" required />
                  <input type="tel" name="phone" placeholder="Phone Number *" required />
                  <input type="email" name="email" placeholder="Email Address *" required />
                  <select name="service" required defaultValue="Custom Doors">
                    <option value="Custom Doors">Custom Doors</option>
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
                  {doorServices.map((service) => (
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
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Schedule Your Free Custom Door Consultation</h2>
          <p>Let us create the perfect door for your McKinney home. Contact us today.</p>
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
