'use client';

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 20, textAlign: 'center' }}>
          <h1 style={{ color: '#D4AF37', fontSize: 22, fontWeight: 900 }}>EGO OLE? is having a problem</h1>
          <button
            type="button"
            onClick={reset}
            style={{ background: '#D4AF37', color: '#000', border: 'none', borderRadius: 8, padding: '10px 16px', fontWeight: 700 }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
