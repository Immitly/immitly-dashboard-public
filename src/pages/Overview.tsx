import CountUp from '../components/CountUp'
import Gauge from '../components/Gauge'
import { coverage, liveSite, venture } from '../data/immitly'

export default function Overview() {
  const coveragePct = (coverage.countriesHeld / coverage.countriesTotal) * 100
  return (
    <div className="page">
      <div className="page-head">
        <h1>Overview</h1>
        <p className="page-sub">
          The public view of Immitly. Coverage is complete across all 197
          countries, the live page is up, and the platform is in pre-launch.
        </p>
      </div>

      <section className="kpi-grid kpi-grid-4">
        <article className="card kpi">
          <div className="kpi-label">COUNTRIES COVERED</div>
          <div className="kpi-value">
            <CountUp value={coverage.countriesHeld} />
            <span className="kpi-of"> / {coverage.countriesTotal}</span>
          </div>
          <div className="kpi-note">Campaign complete {coverage.completedOn}. Every panel in verification-held state.</div>
        </article>
        <article className="card kpi">
          <div className="kpi-label">PANEL FILES</div>
          <div className="kpi-value">
            <CountUp value={coverage.panelFiles} />
          </div>
          <div className="kpi-note">{coverage.panelNote}</div>
        </article>
        <article className="card kpi">
          <div className="kpi-label">LIVE HOSTS</div>
          <div className="kpi-value">
            <CountUp value={liveSite.hosts.length} />
          </div>
          <div className="kpi-note">{liveSite.version} live since {liveSite.liveOn}: {liveSite.hosts.join(', ')}.</div>
        </article>
        <article className="card kpi">
          <div className="kpi-label">STATUS</div>
          <div className="kpi-value">{venture.status}</div>
          <div className="kpi-note">{venture.slogan}. {venture.descriptor}</div>
        </article>
      </section>

      <section className="grid-2">
        <article className="card">
          <h2>Coverage complete</h2>
          <Gauge
            pct={coverage.countriesHeld / coverage.countriesTotal}
            centerValue={String(coverage.countriesHeld)}
            centerSub={`of ${coverage.countriesTotal} countries`}
            label="COUNTRIES COVERED"
            sub={`Campaign complete ${coverage.completedOn}`}
          />
          <p className="fine">
            Every country panel sits in verification-held state. Coverage work
            closed on {coverage.completedOn} with no country left outside the
            held state.
          </p>
        </article>

        <article className="card">
          <h2>Coverage at a glance</h2>
          <div className="progress-head">
            <span className="progress-big">{coveragePct.toFixed(0)} percent</span>
            <span className="progress-note">of countries covered</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${coveragePct}%` }} />
          </div>
          <ul className="stat-list">
            <li>
              <span>Countries in verification-held state</span>
              <strong>197 of 197</strong>
            </li>
            <li>
              <span>Campaign state</span>
              <strong>COMPLETE, {coverage.completedOn}</strong>
            </li>
            <li>
              <span>Panel files</span>
              <strong>{coverage.panelFiles}</strong>
            </li>
            <li>
              <span>Platform status</span>
              <strong>{venture.status}</strong>
            </li>
          </ul>
          <p className="fine">{coverage.registerNote}</p>
        </article>
      </section>

      <section className="grid-2">
        <article className="card">
          <h2>Coverage composition</h2>
          <div className="stack-track" role="img" aria-label="197 country panels plus 1 jurisdiction panel equals 198 panel files">
            <span
              className="stack-fill stack-fill-main"
              style={{ width: `${(coverage.countryPanels / coverage.panelFiles) * 100}%` }}
            />
            <span
              className="stack-fill stack-fill-alt"
              style={{ width: `${(coverage.jurisdictionPanels / coverage.panelFiles) * 100}%` }}
            />
          </div>
          <div className="bar-list">
            <div className="bar-row">
              <span className="bar-name">Country panels</span>
              <span className="bar-track">
                <span
                  className="bar-fill bar-fill-red"
                  style={{ width: `${(coverage.countryPanels / coverage.panelFiles) * 100}%` }}
                />
              </span>
              <span className="bar-val">{coverage.countryPanels}</span>
            </div>
            <div className="bar-row">
              <span className="bar-name">Jurisdiction panel (Hong Kong)</span>
              <span className="bar-track">
                <span
                  className="bar-fill"
                  style={{ width: `${(coverage.jurisdictionPanels / coverage.panelFiles) * 100}%` }}
                />
              </span>
              <span className="bar-val">{coverage.jurisdictionPanels}</span>
            </div>
          </div>
          <p className="fine">
            197 countries plus 1 jurisdiction panel equals {coverage.panelFiles} panel
            files. The Hong Kong panel sits outside the 197 country count.
          </p>
        </article>

        <article className="card">
          <h2>Live site status</h2>
          <div className="status-row">
            <span className="dot dot-live" />
            <strong>
              {liveSite.version} live since {liveSite.liveOn}
            </strong>
          </div>
          <ul className="stat-list">
            {liveSite.hosts.map((h) => (
              <li key={h}>
                <span>{h}</span>
                <strong>Live</strong>
              </li>
            ))}
          </ul>
          <div className="tag-line">
            <span className="tag">{liveSite.slogan}</span>
            <span className="tag tag-outline">{liveSite.descriptor}</span>
          </div>
          <ul className="feature-list">
            {liveSite.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}
