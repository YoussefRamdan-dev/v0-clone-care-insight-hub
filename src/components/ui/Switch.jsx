"use client"

import { useState } from "react"

function Switch({ id, checked = false, onCheckedChange, className = "" }) {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    if (onCheckedChange) {
      onCheckedChange(newValue)
    }
  }

  return (
    <div className={`relative inline-block w-10 h-6 ${className}`}>
      <input type="checkbox" id={id} className="opacity-0 w-0 h-0" checked={isChecked} onChange={handleChange} />
      <label
        htmlFor={id}
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-200 ${
          isChecked ? "bg-purple-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${
            isChecked ? "transform translate-x-4" : ""
          }`}
        ></span>
      </label>
    </div>
  )
}

export default Switch
