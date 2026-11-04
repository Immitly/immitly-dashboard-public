import { useState } from 'react'
import Sidebar, { type PageKey } from './components/Sidebar'
import TopBar from './components/TopBar'
import Overview from './pages/Overview'
import Coverage from './pages/Coverage'

export default function App() {
  const [page, setPage] = useState<PageKey>('overview')

  return (
    <div className="shell">
      <Sidebar page={page} onNavigate={setPage} />
      <div className="main">
        <TopBar />
        <main className="content">
          {page === 'overview' && <Overview />}
          {page === 'coverage' && <Coverage />}
        </main>
        <footer className="footer">
          <span>Immitly Dashboard. Public build.</span>
          <span>Every figure shown here is public on immitly.com.</span>
        </footer>
      </div>
    </div>
  )
}
