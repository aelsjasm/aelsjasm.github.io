import { useEffect, useRef } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, variant = 'up', children, style, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cls = `reveal reveal-${variant} ${className}`.trim()
  const mergedStyle = delay ? { ...style, transitionDelay: `${delay}ms` } : style

  return (
    <Tag ref={ref} className={cls} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  )
}
