"use client"

import { forwardRef } from "react"

const Checkbox = forwardRef(({ className = "", checked, onCheckedChange, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 ${className}`}
      ref={ref}
      checked={checked}
      onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
      {...props}
    />
  )
})

Checkbox.displayName = "Checkbox"

export default Checkbox
