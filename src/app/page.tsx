import Link from 'next/link'
import { servicesData, brandsData, siteConfig } from '@/data'
import styles from './page.module.css'

export default function Home() {
  const windowServices = servicesData.filter(s => s.category === 'Windows')

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroLeft}>
              <span className={styles.heroLabel}>McKinney&apos;s Premier Window Specialists</span>
              <h1>Premium Window Replacement<br /><em>for McKinney Homes</em></h1>
              <p className={styles.heroSubtitle}>
                Authorized dealer for America&apos;s most trusted window brands. Transform your home with 
                energy-efficient windows backed by lifetime warranties and expert installation.
              </p>
              <div className={styles.heroTrust}>
                <div className={styles.trustItem}>
                  <span className={styles.trustNumber}>15+</span>
                  <span className={styles.trustLabel}>Years Experience</span>
                </div>
                <div className={styles.trustDivider}></div>
                <div className={styles.trustItem}>
                  <span className={styles.trustNumber}>2,500+</span>
                  <span className={styles.trustLabel}>Windows Installed</span>
                </div>
                <div className={styles.trustDivider}></div>
                <div className={styles.trustItem}>
                  <span className={styles.trustNumber}>100%</span>
                  <span className={styles.trustLabel}>Satisfaction Rate</span>
                </div>
              </div>
            </div>
            <div className={styles.heroRight}>
              <div className={styles.heroCta}>
                <Link href="/contact" className="btn-primary large">Get Your Free Estimate</Link>
                <Link href="/windows" className="btn-secondary large">Explore Window Styles</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className={styles.brandsBar}>
        <div className={styles.container}>
          <p className={styles.brandsIntro}>Premium Window Manufacturers</p>
          <div className={styles.brandsGrid}>
            {brandsData.map((brand) => (
              <Link href={brand.route} key={brand.slug} className={styles.brandItem}>
                <span className={styles.brandName}>{brand.name.split(' ')[0].toUpperCase()}</span>
                <span className={styles.brandTagline}>Windows &amp; Doors</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Window Styles</span>
            <h2>Complete Window Solutions<br /><em>for Every McKinney Home</em></h2>
            <p>From classic double-hung windows to dramatic bay and bow configurations, we offer the full spectrum of replacement window styles to match your home&apos;s architecture and your lifestyle needs.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            {windowServices.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <h3><Link href={service.route}>{service.name}</Link></h3>
                  <p>{service.shortDescription}</p>
                  <Link href={service.route} className={styles.serviceLink}>Learn More</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <div className={styles.aboutImageInner}>
                <img
                  src="/images/about-section-image.jpeg"
                  alt="Window Replacements of McKinney team and craftsmanship"
                  className={styles.aboutImage}
                />
              </div>
              <div className={styles.aboutBadge}>
                <span className={styles.badgeNumber}>15</span>
                <span className={styles.badgeText}>Years of<br />Excellence</span>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>About Window Replacements of McKinney</span>
              <h2>Collin County&apos;s Trusted Name in <em>Window Replacement</em></h2>
              <p className={styles.aboutLead}>
                For over fifteen years, Window Replacements of McKinney has been the go-to choice for homeowners 
                throughout McKinney, Frisco, Allen, and Plano seeking premium window replacement services that 
                combine exceptional craftsmanship with lasting value.
              </p>
              <p>
                We bring you exclusive access to Andersen, Pella, JELD-WEN, and Marvin--America&apos;s most trusted
                window brands--each renowned for innovation, energy efficiency, and timeless design. Our certified
                installation team ensures every window performs exactly as engineered, protecting your investment
                for decades to come.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>Y</div>
                  <div>
                    <strong>Factory-Certified Installers</strong>
                    <span>Trained by Andersen, Pella, JELD-WEN &amp; Marvin</span>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>Y</div>
                  <div>
                    <strong>Lifetime Warranty Protection</strong>
                    <span>Comprehensive coverage on all installations</span>
                  </div>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>Y</div>
                  <div>
                    <strong>Energy Star Certified</strong>
                    <span>Save up to 30% on energy bills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyChooseContent}>
              <span className={styles.sectionLabel}>Why McKinney Chooses Us</span>
              <h2>The Difference is in <em>the Details</em></h2>
              <p>
                When you invest in replacement windows, you deserve more than off-the-shelf solutions. 
                Our meticulous approach ensures every installation enhances your home&apos;s beauty, comfort, 
                and value for decades to come.
              </p>
              
              <div className={styles.differenceList}>
                <div className={styles.differenceItem}>
                  <span className={styles.differenceNumber}>01</span>
                  <div>
                    <h4>Precision Measurement</h4>
                    <p>We measure every opening twice using laser-guided tools, ensuring your custom windows fit perfectly the first time.</p>
                  </div>
                </div>
                <div className={styles.differenceItem}>
                  <span className={styles.differenceNumber}>02</span>
                  <div>
                    <h4>Factory-Direct Pricing</h4>
                    <p>We offer competitive pricing on premium Andersen, Pella, JELD-WEN, and Marvin products without middleman markup.</p>
                  </div>
                </div>
                <div className={styles.differenceItem}>
                  <span className={styles.differenceNumber}>03</span>
                  <div>
                    <h4>Clean, Courteous Installation</h4>
                    <p>Our uniformed teams respect your home with protective coverings, thorough cleanup, and on-time arrivals.</p>
                  </div>
                </div>
                <div className={styles.differenceItem}>
                  <span className={styles.differenceNumber}>04</span>
                  <div>
                    <h4>Post-Installation Support</h4>
                    <p>We stand behind every window with responsive warranty service and ongoing maintenance guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Detail Section */}
      <section className={styles.brandsDetail}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Premium Partners</span>
            <h2>America&apos;s Most Trusted <em>Window Brands</em></h2>
            <p>We bring McKinney homeowners exclusive access to the finest replacement windows manufactured today.</p>
          </div>
          
          <div className={styles.brandsDetailGrid}>
            <article className={styles.brandDetailCard}>
              <div className={styles.brandDetailHeader}>
                <span className={styles.brandDetailName}>ANDERSEN</span>
                <span className={styles.brandDetailSince}>Est. 1903</span>
              </div>
              <div className={styles.brandDetailContent}>
                <p>For over 120 years, Andersen has set the standard for window craftsmanship. Their innovative Fibrex composite material delivers superior durability and energy efficiency.</p>
                <ul>
                  <li>Patented Fibrex composite</li>
                  <li>Industry-leading warranties</li>
                  <li>Made in USA</li>
                </ul>
              </div>
            </article>

            <article className={styles.brandDetailCard}>
              <div className={styles.brandDetailHeader}>
                <span className={styles.brandDetailName}>PELLA</span>
                <span className={styles.brandDetailSince}>Est. 1925</span>
              </div>
              <div className={styles.brandDetailContent}>
                <p>Pella&apos;s century of innovation has produced breakthrough features Texas homeowners love: between-the-glass blinds and the exclusive inView transparent screens.</p>
                <ul>
                  <li>Between-glass blinds &amp; shades</li>
                  <li>inView transparent screens</li>
                  <li>Triple-pane options</li>
                </ul>
              </div>
            </article>

            <article className={styles.brandDetailCard}>
              <div className={styles.brandDetailHeader}>
                <span className={styles.brandDetailName}>JELD-WEN</span>
                <span className={styles.brandDetailSince}>Est. 1960</span>
              </div>
              <div className={styles.brandDetailContent}>
                <p>JELD-WEN combines exceptional quality with outstanding value, making premium replacement windows accessible to more McKinney families.</p>
                <ul>
                  <li>Exceptional value</li>
                  <li>AuraLast wood protection</li>
                  <li>20-year warranty</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className={styles.serviceAreas}>
        <div className={styles.container}>
          <div className={styles.areasContent}>
            <h3>Proudly Serving McKinney &amp; Surrounding Communities</h3>
            <p>Our expert window replacement services extend throughout Collin County and beyond:</p>
            <div className={styles.areasList}>
              <span>McKinney</span>
              <span>Frisco</span>
              <span>Allen</span>
              <span>Plano</span>
              <span>Prosper</span>
              <span>Celina</span>
              <span>Anna</span>
              <span>Princeton</span>
              <span>Fairview</span>
              <span>Lucas</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Home?</h2>
            <p>Schedule your free, no-obligation window consultation. Our experts will assess your needs, show you options from Andersen, Pella, JELD-WEN, and Marvin, and provide a detailed estimate--all at no cost to you.</p>
            <div className={styles.ctaActions}>
              <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} className="btn-primary large">
                Call {siteConfig.phone}
              </a>
              <span className={styles.ctaOr}>or</span>
              <Link href="/contact" className="btn-secondary large">Request Online Estimate</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Common Questions</span>
            <h2>Window Replacement <em>FAQs</em></h2>
          </div>
          
          <div className={styles.faqGrid}>
            <details className={styles.faqItem}>
              <summary>How much do replacement windows cost in McKinney, TX?</summary>
              <p>Replacement window costs in McKinney typically range from $300-$1,200 per window, depending on the style, brand, and features selected. Andersen and Pella premium options may cost more, while JELD-WEN offers excellent value. We provide free, detailed estimates so you know exactly what to expect with no hidden fees.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>How long does window replacement installation take?</summary>
              <p>Most window replacement projects are completed in 1-3 days. A typical McKinney home with 10-15 windows can usually be finished in a single day. Larger projects or those involving custom specialty windows may take slightly longer. We&apos;ll provide a specific timeline during your consultation.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>What&apos;s the difference between Andersen, Pella, and JELD-WEN?</summary>
              <p>All three brands offer excellent quality. Andersen is known for their innovative Fibrex material and extensive customization. Pella stands out with their between-glass blinds and highly transparent screens. JELD-WEN delivers premium features at more accessible price points. We&apos;ll help you choose the best fit for your needs and budget.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Are your windows Energy Star certified?</summary>
              <p>Yes! All windows we install from Andersen, Pella, JELD-WEN, and Marvin meet or exceed Energy Star requirements for the South-Central climate zone. This means significant savings on your McKinney home&apos;s cooling and heating costs--often 20-30% compared to older windows.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>Do you offer financing for window replacement?</summary>
              <p>Absolutely. We partner with leading lenders to offer flexible financing options including 0% interest for qualified buyers. Our team will walk you through available programs during your free estimate so you can find a payment plan that works for your budget.</p>
            </details>
            
            <details className={styles.faqItem}>
              <summary>What warranty do you provide?</summary>
              <p>Your windows are protected by comprehensive manufacturer warranties from Andersen, Pella, JELD-WEN, or Marvin (typically 20 years to lifetime coverage). Additionally, we provide our own workmanship warranty on installation. If any issue arises, we&apos;re here to make it right.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How much do replacement windows cost in McKinney, TX?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Replacement window costs in McKinney typically range from $300-$1,200 per window, depending on the style, brand, and features selected. Andersen and Pella premium options may cost more, while JELD-WEN offers excellent value. We provide free, detailed estimates so you know exactly what to expect with no hidden fees.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does window replacement installation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most window replacement projects are completed in 1-3 days. A typical McKinney home with 10-15 windows can usually be finished in a single day. Larger projects or those involving custom specialty windows may take slightly longer.',
                },
              },
              {
                '@type': 'Question',
                name: 'What\'s the difference between Andersen, Pella, and JELD-WEN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All three brands offer excellent quality. Andersen is known for their innovative Fibrex material and extensive customization. Pella stands out with their between-glass blinds and highly transparent screens. JELD-WEN delivers premium features at more accessible price points.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are your windows Energy Star certified?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! All windows we install from Andersen, Pella, JELD-WEN, and Marvin meet or exceed Energy Star requirements for the South-Central climate zone. This means significant savings on your McKinney home\'s cooling and heating costs--often 20-30% compared to older windows.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer financing for window replacement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We partner with leading lenders to offer flexible financing options including 0% interest for qualified buyers. Our team will walk you through available programs during your free estimate so you can find a payment plan that works for your budget.',
                },
              },
              {
                '@type': 'Question',
                name: 'What warranty do you provide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Your windows are protected by comprehensive manufacturer warranties from Andersen, Pella, JELD-WEN, or Marvin (typically 20 years to lifetime coverage). Additionally, we provide our own workmanship warranty on installation. If any issue arises, we\'re here to make it right.',
                },
              },
            ],
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://windowreplacementmckinney.com',
              },
            ],
          }),
        }}
      />
    </>
  )
}
