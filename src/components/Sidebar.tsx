export type PageKey = 'overview' | 'coverage'

interface SidebarProps {
  page: PageKey
  onNavigate: (page: PageKey) => void
}

const items: { key: PageKey; label: string; code: string }[] = [
  { key: 'overview', label: 'Overview', code: '01' },
  { key: 'coverage', label: 'Coverage', code: '02' },
]

export default function Sidebar({ page, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          Immitly<span className="brand-dot">.</span>
        </div>
        <div className="brand-sub">DASHBOARD</div>
        <div className="brand-desc">Verified immigration guidance, step by step.</div>
      </div>
      <nav className="nav" aria-label="Primary">
        {items.map((item) => (
          <button
            key={item.key}
            className={page === item.key ? 'nav-item active' : 'nav-item'}
            onClick={() => onNavigate(item.key)}
          >
            <span className="nav-code">{item.code}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-foot">
        <div className="foot-label">LEGAL LINE</div>
        <p>
          Paid case-specific advice: licensed lawyers and RCICs only. Immitly
          never files and never represents. IRPA s.91.
        </p>
        <div className="foot-label">STATUS</div>
        <p>Public build. Pre-launch. Figures are public on immitly.com.</p>
      </div>
    </aside>
  )
}
