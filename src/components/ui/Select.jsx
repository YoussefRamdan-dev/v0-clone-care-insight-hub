"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function Select({ children, value, onValueChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            isOpen,
            onClick: () => setIsOpen(!isOpen),
            value,
          })
        }
        if (child.type === SelectContent && isOpen) {
          return React.cloneElement(child, {
            onValueChange: (val) => {
              onValueChange(val)
              setIsOpen(false)
            },
          })
        }
        return null
      })}
    </div>
  )
}

export function SelectTrigger({ children, id, className = "", isOpen, onClick, value }) {
  return (
    <button
      id={id}
      type="button"
      className={`flex items-center justify-between w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ${className}`}
      onClick={onClick}
      aria-expanded={isOpen}
    >
      {React.Children.map(children, (child) => {
        if (child.type === SelectValue) {
          return React.cloneElement(child, { value })
        }
        return child
      })}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
}

export function SelectValue({ children, placeholder, value }) {
  return <span className="block truncate">{value || placeholder}</span>
}

export function SelectContent({ children, className = "", onValueChange }) {
  return (
    <div className={`absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg ${className}`}>
      <ul className="py-1 max-h-60 overflow-auto">
        {React.Children.map(children, (child) => React.cloneElement(child, { onSelect: onValueChange }))}
      </ul>
    </div>
  )
}

export function SelectItem({ children, value, className = "", onSelect }) {
  return (
    <li className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${className}`} onClick={() => onSelect(value)}>
      {children}
    </li>
  )
}
