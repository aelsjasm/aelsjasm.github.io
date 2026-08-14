import { useEffect, useRef } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', children, stagger = false, ...rest }) {
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
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cls = `${stagger ? 'reveal-stagger' : 'reveal'} ${className}`.trim()

  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  )
}
