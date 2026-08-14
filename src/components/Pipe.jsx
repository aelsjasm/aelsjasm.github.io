export default function Pipe() {
  return (
    <div className="pipe" aria-hidden="true">
      <svg width="24" height="64" viewBox="0 0 24 64">
        <line x1="12" y1="0" x2="12" y2="64" stroke="var(--line-strong)" strokeWidth="2" />
        <line
          className="pipe-flow"
          x1="12" y1="0" x2="12" y2="64"
          stroke="var(--teal)"
          strokeWidth="2"
        />
        <circle cx="12" cy="32" r="5" fill="var(--bg-0)" stroke="var(--teal)" strokeWidth="2" />
      </svg>
    </div>
  )
}
