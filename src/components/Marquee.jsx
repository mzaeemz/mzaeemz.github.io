export default function Marquee({ items, reverse = false, speed = 30 }) {
  const doubled = [...items, ...items]

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid #1a1a20',
      borderBottom: '1px solid #1a1a20',
      padding: '16px 0',
      background: '#111114',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: `${reverse ? 'marquee-right' : 'marquee-left'} ${items.length * speed}s linear infinite`,
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingRight: '24px', whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: '12px', color: '#333', fontFamily: 'monospace', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {item}
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#8b7cf8', opacity: 0.5, flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  )
}
