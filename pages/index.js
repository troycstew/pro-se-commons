import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="font-bold text-xl">Pro Se Commons</Link>
      
      <div className="flex items-center gap-4">
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/how-it-works">How it works</Link>
        
        {/* Working Auth Buttons */}
        <Link href="https://accounts.clerk.dev" className="text-sm font-medium">
          Sign in
        </Link>
        <Link 
          href="https://accounts.clerk.dev" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Join / Register
        </Link>
      </div>
    </header>
  );
} default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Pro Se Commons</h1>
      <p>P2P Marketplace for Redacted Legal Templates</p>
      <div style={{ marginTop: "20px" }}>
        <a href="/marketplace" style={{ padding: "10px 20px", background: "#0070f3", color: "#fff", textDecoration: "none", borderRadius: "5px" }}>
          Browse Marketplace
        </a>
      </div>
    </div>
  );
}
