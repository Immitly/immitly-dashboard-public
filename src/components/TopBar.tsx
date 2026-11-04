import { useEffect, useState } from 'react'

function torontoNow(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Toronto',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

export default function TopBar() {
  const [clock, setClock] = useState(torontoNow())

  useEffect(() => {
    const id = setInterval(() => setClock(torontoNow()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="chip chip-red">LIVE</span>
        <span className="chip">immitly.com v9</span>
        <span className="chip">197 of 197 HELD</span>
        <span className="chip chip-outline">PRE-LAUNCH</span>
      </div>
      <div className="clock" aria-label="Toronto time">
        <span className="clock-label">TORONTO</span>
        <span className="clock-value">{clock}</span>
      </div>
    </header>
  )
}
