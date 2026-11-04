import { useMemo, useState } from 'react'
import CountUp from '../components/CountUp'
import { coverage, representativeCountries, venture } from '../data/immitly'

export default function Coverage() {
  const [query, setQuery] = useState('')
  const [asc, setAsc] = useState(true)

  const rows = useMemo(() => {
    const filtered = representativeCountries.filter((r) =>
      r.country.toLowerCase().includes(query.trim().toLowerCase()),
    )
    const sorted = [...filtered].sort((a, b) =>
      asc
        ? a.country.localeCompare(b.country)
        : b.country.localeCompare(a.country),
    )
    return sorted
  }, [query, asc])

  return (
    <div className="page">
      <div className="page-head">
        <h1>Coverage</h1>
        <p className="page-sub">
          Country coverage is complete. All 197 countries sit in
          verification-held state since {coverage.completedOn}.
        </p>
      </div>

      <section className="kpi-grid kpi-grid-4">
        <article className="card kpi">
          <div className="kpi-label">ALL 197</div>
          <div className="kpi-value">
            <CountUp value={coverage.countriesHeld} />
            <span className="kpi-of"> / {coverage.countriesTotal}</span>
          </div>
          <div className="kpi-note">Verification held. Zero countries in any other state.</div>
        </article>
        <article className="card kpi">
          <div className="kpi-label">PANEL FILES</div>
          <div className="kpi-value">
            <CountUp value={coverage.panelFiles} />
          </div>
          <div className="kpi-note">{coverage.panelNote}</div>
        </article>
        <article className="card kpi">
          <div className="kpi-label">CAMPAIGN STATE</div>
          <div className="kpi-value">{coverage.status}</div>
          <div className="kpi-note">Closed {coverage.completedOn}. Coverage is the public record on immitly.com.</div>
        </article>
        <article className="card kpi">
          <div className="kpi-label">PANEL STATE</div>
          <div className="kpi-value">Held</div>
          <div className="kpi-note">Every one of the 197 country panels is in verification-held state.</div>
        </article>
      </section>

      <article className="card">
        <div className="table-head">
          <h2>Named countries</h2>
          <input
            className="search"
            type="search"
            placeholder="Search country"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search country"
          />
        </div>
        <p className="fine">
          A named sample from the coverage set. The full count of record is
          197 countries, and every panel in the set carries the same held
          state. {coverage.registerNote}
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <button className="th-btn" onClick={() => setAsc(!asc)}>
                    Country {asc ? '(A to Z)' : '(Z to A)'}
                  </button>
                </th>
                <th>State</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.country}>
                  <td className="td-strong">{r.country}</td>
                  <td>
                    <span className="chip chip-small">{r.state}</span>
                  </td>
                  <td className="fine">{r.note ?? ''}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={3} className="fine">
                    No country in the named set matches this search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </article>

      <article className="card legal-card">
        <h2>The legal line</h2>
        <p className="legal-text">{venture.legalLine}</p>
        <p className="fine">
          Immitly gives verified, step-by-step guidance. Case-specific advice
          on a real file stays with licensed professionals.
        </p>
      </article>
    </div>
  )
}
