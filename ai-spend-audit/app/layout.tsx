import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#2563eb', color: 'white', margin: 0, padding: '50px', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '40px' }}>Spend Audit</h1>
        <p>Welcome to the Spend Audit!</p>
        <div style={{ backgroundColor: 'white', color: 'black', padding: '20px', borderRadius: '10px' }}>
          {children}
        </div>
      </body>
    </html>
  );
} 