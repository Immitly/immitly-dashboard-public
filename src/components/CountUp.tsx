import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  durationMs?: number
}

export default function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  durationMs = 1100,
}: CountUpProps) {
  const [display, setDisplay] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [value, durationMs])

  const formatted = display.toLocaleString('en-CA', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
