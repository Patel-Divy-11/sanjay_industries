'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Package, Globe, ShieldCheck, Clock } from 'lucide-react'

const trustStats = [
  { icon: Award, value: '35', suffix: '+', label: 'Years of Experience' },
  { icon: Package, value: '20', suffix: '+', label: 'Products' },
  { icon: Globe, value: '4', suffix: '+', label: 'Export Countries' },
  { icon: ShieldCheck, value: 'ISO', suffix: '', label: 'Quality Certified' },
  { icon: Clock, value: '24', suffix: 'Hr', label: 'Inquiry Response' },
]

function AnimatedNumber({ target, suffix }: { target: string; suffix: string }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  // If not numeric, display as-is
  if (isNaN(Number(target))) {
    return (
      <span className="stat-number text-4xl md:text-5xl text-navy">
        {target}{suffix}
      </span>
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const end = Number(target)
          const duration = 1800
          const steps = 50
          const stepValue = end / steps
          let current = 0
          const timer = setInterval(() => {
            current += stepValue
            if (current >= end) {
              setDisplay(String(end))
              clearInterval(timer)
            } else {
              setDisplay(String(Math.floor(current)))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="stat-number text-4xl md:text-5xl text-navy">
      {display}{suffix}
    </span>
  )
}

export default function TrustBar() {
  return (
    <section id="trust" className="bg-white border-b border-border">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {trustStats.map(({ icon: Icon, value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy-50 flex items-center justify-center group-hover:bg-navy transition-colors duration-200">
                <Icon
                  size={22}
                  className="text-navy group-hover:text-white transition-colors duration-200"
                />
              </div>
              <AnimatedNumber target={value} suffix={suffix} />
              <p className="text-xs font-poppins font-medium text-text-secondary uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
