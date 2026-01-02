import Link from 'next/link'
import { servicesData, locationsData, brandsData, siteConfig } from '@/data'
import styles from './footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const windowServices = servicesData.filter(s => s.category === 'Windows')
  const doorServices = servicesData.filter(s => s.category === 'Doors')
  const topLocations = locationsData.slice(0, 8)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Grid */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="52" height="52" stroke="currentColor" strokeWidth="2"/>
                  <line x1="30" y1="4" x2="30" y2="56" stroke="currentColor" strokeWidth="2"/>
                  <line x1="4" y1="30" x2="56" y2="30" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>Window Replacements</span>
                <span className={styles.logoTagline}>of McKinney</span>
              </div>
            </Link>
            <p className={styles.description}>
              McKinney&apos;s trusted source for premium replacement windows from Andersen, Pella, JELD-WEN, and Marvin. 
              Serving Collin County homeowners with expert installation and unmatched customer service.
            </p>
          </div>

          {/* Windows Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Windows</h4>
            <ul className={styles.linkList}>
              {windowServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Doors Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Doors</h4>
            <ul className={styles.linkList}>
              {doorServices.map((service) => (
                <li key={service.slug}>
                  <Link href={service.route}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Brands</h4>
            <ul className={styles.linkList}>
              {brandsData.map((brand) => (
                <li key={brand.slug}>
                  <Link href={brand.route}>{brand.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Service Areas</h4>
            <ul className={styles.linkList}>
              {topLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={location.route}>{location.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <address className={styles.address}>
              <p><strong>{siteConfig.name}</strong></p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
              <p>
                <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className={styles.phoneLink}>
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className={styles.emailLink}>
                  {siteConfig.email}
                </a>
              </p>
            </address>
            <div className={styles.hours}>
              <p><strong>Hours:</strong></p>
              <p>{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>

        {/* Google Maps */}
        <div className={styles.mapSection}>
          <h3 className={styles.mapTitle}>Find Us</h3>
          <div className={styles.mapContainer}>
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

        {/* Disclosure */}
        <div className={styles.disclosure}>
          <p>
            Our network of fulfillment partners helps match you with qualified window and door specialists, delivering comprehensive project coordination and ongoing support.
          </p>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved. | Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  )
}
