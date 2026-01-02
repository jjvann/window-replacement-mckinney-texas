import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://windowreplacementmckinney.com'),
  title: {
    default: 'Window Replacement McKinney TX | Andersen, Pella & JELD-WEN Experts',
    template: '%s | Window Replacements of McKinney',
  },
  description: 'Premium window replacement in McKinney, Texas. Authorized dealer for Andersen, Pella & JELD-WEN windows. Expert installation of double-hung, casement, bay & bow windows. Free estimates. Call 945-206-3998.',
  keywords: [
    'window replacement McKinney TX',
    'Andersen windows McKinney',
    'Pella windows Texas',
    'JELD-WEN dealer McKinney',
    'double-hung windows McKinney',
    'casement windows installation',
    'bay windows McKinney TX',
    'bow windows installation',
    'window installation McKinney',
    'energy efficient windows McKinney',
    'replacement windows Collin County',
  ],
  authors: [{ name: 'Window Replacements of McKinney' }],
  creator: 'Window Replacements of McKinney',
  publisher: 'Window Replacements of McKinney',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#ffffff',
    'geo.region': 'US-TX',
    'geo.placename': 'McKinney',
    'geo.position': '33.1972;-96.6397',
    'ICBM': '33.1972, -96.6397',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://windowreplacementmckinney.com',
    siteName: 'Window Replacements of McKinney',
    title: 'Best Window Replacement in McKinney, TX',
    description: 'Premium window replacement in McKinney, Texas. Authorized dealer for Andersen, Pella & JELD-WEN windows.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Window Replacements of McKinney - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Replacement McKinney TX | Andersen, Pella & JELD-WEN Experts',
    description: 'Premium window replacement in McKinney, Texas. Expert installation with lifetime warranty.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://windowreplacementmckinney.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              '@id': 'https://windowreplacementmckinney.com/#organization',
              name: 'Window Replacements of McKinney',
              alternateName: 'McKinney Window Replacement',
              description: 'Premium window replacement in McKinney, Texas. Authorized dealer for Andersen, Pella & JELD-WEN windows.',
              url: 'https://windowreplacementmckinney.com',
              telephone: '+1-945-206-3998',
              email: 'info@windowreplacementmckinney.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '6800 Weiskopf Ave #150',
                addressLocality: 'McKinney',
                addressRegion: 'TX',
                postalCode: '75070',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 33.1972,
                longitude: -96.6397,
              },
              areaServed: [
                { '@type': 'City', name: 'McKinney', containedInPlace: { '@type': 'State', name: 'Texas' } },
                { '@type': 'City', name: 'Frisco' },
                { '@type': 'City', name: 'Allen' },
                { '@type': 'City', name: 'Plano' },
                { '@type': 'City', name: 'Prosper' },
                { '@type': 'City', name: 'Celina' },
                { '@type': 'City', name: 'Anna' },
                { '@type': 'City', name: 'Princeton' },
              ],
              knowsAbout: [
                'Window Replacement',
                'Window Installation',
                'Energy Efficient Windows',
                'Double-Hung Windows',
                'Casement Windows',
                'Bay Windows',
                'Bow Windows',
              ],
              brand: [
                { '@type': 'Brand', name: 'Andersen' },
                { '@type': 'Brand', name: 'Pella' },
                { '@type': 'Brand', name: 'JELD-WEN' },
                { '@type': 'Brand', name: 'Marvin' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Financing',
              image: 'https://windowreplacementmckinney.com/og-image.jpg',
              logo: 'https://windowreplacementmckinney.com/logo.png',
              slogan: 'Premium Window Replacement for McKinney Homes',
              foundingDate: '2010',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '112',
                bestRating: '5',
                worstRating: '1',
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://windowreplacementmckinney.com/#website',
              name: 'Window Replacements of McKinney',
              url: 'https://windowreplacementmckinney.com',
              publisher: { '@id': 'https://windowreplacementmckinney.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://windowreplacementmckinney.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://windowreplacementmckinney.com/#org',
              name: 'Window Replacements of McKinney',
              url: 'https://windowreplacementmckinney.com',
              logo: 'https://windowreplacementmckinney.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-945-206-3998',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: ['English', 'Spanish'],
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
