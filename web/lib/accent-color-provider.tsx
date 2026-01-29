"use client"

import * as React from "react"

export type AccentColor = "blue" | "green" | "purple" | "orange" | "red" | "pink"

type AccentColorProviderProps = {
  children: React.ReactNode
  defaultColor?: AccentColor
  storageKey?: string
}

type AccentColorProviderState = {
  accentColor: AccentColor
  setAccentColor: (color: AccentColor) => void
}

const initialState: AccentColorProviderState = {
  accentColor: "blue",
  setAccentColor: () => null,
}

const AccentColorProviderContext = React.createContext<AccentColorProviderState>(initialState)

export function AccentColorProvider({
  children,
  defaultColor = "blue",
  storageKey = "workingtogether-accent-color",
  ...props
}: AccentColorProviderProps) {
  const [accentColor, setAccentColor] = React.useState<AccentColor>(
    () => (typeof window !== "undefined" && (localStorage.getItem(storageKey) as AccentColor)) || defaultColor
  )

  React.useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute("data-accent-color", accentColor)
  }, [accentColor])

  const value = {
    accentColor,
    setAccentColor: (color: AccentColor) => {
      localStorage.setItem(storageKey, color)
      setAccentColor(color)
    },
  }

  return (
    <AccentColorProviderContext.Provider {...props} value={value}>
      {children}
    </AccentColorProviderContext.Provider>
  )
}

export const useAccentColor = () => {
  const context = React.useContext(AccentColorProviderContext)

  if (context === undefined)
    throw new Error("useAccentColor must be used within an AccentColorProvider")

  return context
}

