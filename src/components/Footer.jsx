export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1a1a20',
      padding: '32px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
    }}>
      <p style={{ color: '#333', fontSize: '11px', fontFamily: 'monospace' }}>
        © {new Date().getFullYear()} Muhammad Zaeem Zahid
      </p>
      <p style={{ color: '#2a2a2a', fontSize: '11px', fontFamily: 'monospace' }}>
        React · Tailwind · Framer Motion
      </p>
    </footer>
  )
}
