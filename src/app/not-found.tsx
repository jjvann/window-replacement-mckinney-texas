import Link from 'next/link'
import { siteConfig } from '@/data'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      paddingTop: '8rem',
      background: 'linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%)'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(6rem, 15vw, 10rem)',
          fontWeight: 600,
          color: 'var(--color-primary)',
          lineHeight: 1,
          marginBottom: '1rem'
        }}>
          404
        </h1>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: 'var(--color-primary)',
          marginBottom: '1.5rem'
        }}>
          Page Not Found
        </h2>
        <p style={{
          color: 'var(--color-text-light)',
          fontSize: '1.1rem',
          marginBottom: '2rem'
        }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <Link href="/" className="btn-primary large">
            Return Home
          </Link>
          <Link href="/contact" className="btn-secondary large">
            Contact Us
          </Link>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem',
            marginBottom: '1rem'
          }}>
            Or try one of these popular pages:
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <Link href="/windows" style={{ color: 'var(--color-accent-dark)' }}>Windows</Link>
            <Link href="/doors" style={{ color: 'var(--color-accent-dark)' }}>Doors</Link>
            <Link href="/brands" style={{ color: 'var(--color-accent-dark)' }}>Brands</Link>
            <Link href="/locations" style={{ color: 'var(--color-accent-dark)' }}>Locations</Link>
            <Link href="/about" style={{ color: 'var(--color-accent-dark)' }}>About</Link>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Need help? Call us at{' '}
            <a href={`tel:+1${siteConfig.phone.replace(/-/g, '')}`} style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
