export default function BitbucketIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5.2 1.7C4.5 1.7 4 2.2 4 2.9c0 0.1 0 0.2 0 0.3l2.9 17.3c0.1 0.5 0.5 0.8 1 0.8h8.2c0.4 0 0.7-0.3 0.8-0.6l2.9-17.4c0.1-0.6-0.3-1.2-1-1.3c-0.1 0-0.1 0-0.2 0H5.2z" />
      <path d="M15.8 8.7H8.2l-1 5.6h9.6L15.8 8.7z" />
    </svg>
  )
}
