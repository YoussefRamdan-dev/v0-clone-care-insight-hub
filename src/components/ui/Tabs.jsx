"use client"

import React from "react"

import { useState } from "react"

export function Tabs({ defaultValue, children, className = "", onValueChange }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const handleTabChange = (value) => {
    setActiveTab(value)
    if (onValueChange) {
      onValueChange(value)
    }
  }

  // Filter children to get only TabsList and TabsContent components
  const tabsList = children.find((child) => child.type === TabsList)
  const tabsContent = children.filter((child) => child.type === TabsContent)

  return (
    <div className={className}>
      {tabsList && React.cloneElement(tabsList, { activeTab, onValueChange: handleTabChange })}
      {tabsContent.map((content) =>
        React.cloneElement(content, {
          key: content.props.value,
          active: content.props.value === activeTab,
        }),
      )}
    </div>
  )
}

export function TabsList({ children, className = "", activeTab, onValueChange }) {
  return (
    <div className={`flex ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          active: child.props.value === activeTab,
          onClick: () => onValueChange(child.props.value),
        }),
      )}
    </div>
  )
}

export function TabsTrigger({ children, value, className = "", active, onClick }) {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium ${
        active ? "bg-white text-purple-700 border-b-2 border-purple-500" : "text-gray-500 hover:text-gray-700"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, active, className = "" }) {
  if (!active) return null

  return <div className={`mt-2 ${className}`}>{children}</div>
}
