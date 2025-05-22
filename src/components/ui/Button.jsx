"use client"

function Button({
  children,
  variant = "default",
  className = "",
  disabled = false,
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variantStyles = {
    default: "bg-purple-500 text-white hover:bg-purple-600 px-4 py-2",
    outline: "border border-gray-300 text-gray-700 hover:text-purple-500 hover:border-purple-500 px-4 py-2",
    ghost: "hover:bg-gray-100 text-gray-700 px-4 py-2",
    link: "text-purple-500 hover:underline p-0 h-auto",
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button type={type} className={combinedClassName} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
