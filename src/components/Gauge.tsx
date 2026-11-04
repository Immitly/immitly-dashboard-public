interface GaugeProps {
  pct: number
  centerValue: string
  centerSub: string
  label: string
  sub: string
}

export default function Gauge({ pct, centerValue, centerSub, label, sub }: GaugeProps) {
  const r = 84
  const c = 2 * Math.PI * r
  const filled = c * Math.min(1, Math.max(0, pct))
  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 220 220" className="gauge" role="img" aria-label={label}>
        <circle cx="110" cy="110" r={r} className="gauge-track" strokeDasharray={c} />
        <circle
          cx="110"
          cy="110"
          r={r}
          className="gauge-fill"
          strokeDasharray={`${filled} ${c - filled}`}
        />
      </svg>
      <div className="gauge-center">
        <div className="gauge-score">{centerValue}</div>
        <div className="gauge-scale">{centerSub}</div>
        <div className="gauge-pct">{(pct * 100).toFixed(0)} percent</div>
      </div>
      <div className="gauge-label">{label}</div>
      <div className="gauge-sub">{sub}</div>
    </div>
  )
}
