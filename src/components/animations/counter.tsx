'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'

interface CounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CounterProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(from)

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * (to - from) + from)
        setCount(currentCount)
        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          setCount(to)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [inView, from, to, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}
