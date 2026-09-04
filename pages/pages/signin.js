import Link from 'next/link';

export default function SignIn() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '32px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>Sign in to Pro Se Commons</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '24px', fontSize: '14px' }}>Access legal templates and your account</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Email Address</label>
            <input type="email" required style={{ width: '100%', padding: '8px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="you@example.com" />
          </div>
          <div>
            <label style={{ fontSize: '14px', fontWeight: 'bold' }}>Password</label>
            <input type="password" required style={{ width: '100%', padding: '8px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="••••••••" />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link href="/marketplace" style={{ color: '#2563eb', textDecoration: 'none', fontSize: '14px' }}>
            ← Back to Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}
