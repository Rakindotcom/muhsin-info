export function Badge({ children, variant = "default", className = "" }) {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  const variants = {
    default: "bg-gray-900 text-gray-50 hover:bg-gray-900/80",
    outline: "text-gray-950 border border-gray-200 bg-transparent hover:bg-gray-100 hover:text-gray-900",
  }

  return <div className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</div>
}
