import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 32px', borderBottom: '1px solid #e5e7eb' }}>
        <Link href="/" style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', color: '#111827' }}>
          Pro Se Commons
        </Link>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Link href="/marketplace" style={{ textDecoration: 'none', color: '#374151' }}>Marketplace</Link>
          <Link href="/signin" style={{ textDecoration: 'none', color: '#374151', fontWeight: 'bold' }}>Sign in</Link>
          <Link href="/signin" style={{ textDecoration: 'none', backgroundColor: '#2563eb', color: '#ffffff', padding: '8px 16px', borderRadius: '6px' }}>
            Join / Register
          </Link>
        </div>
      </header>

      <main style={{ padding: '64px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>Legal templates by the people who actually filed them.</h1>
        <p style={{ marginTop: '16px', color: '#4b5563', fontSize: '18px' }}>
          Pro Se Commons is a peer-to-peer marketplace where self-represented litigants share redacted motions, complaints, and filings.
        </p>
        <div style={{ marginTop: '32px' }}>
          <Link href="/marketplace" style={{ backgroundColor: '#111827', color: '#ffffff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none' }}>
            Browse the marketplace
          </Link>
        </div>
      </main>
    </div>
  );
}
