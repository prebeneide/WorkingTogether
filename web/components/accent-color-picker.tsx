"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { useTranslations } from 'next-intl'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAccentColor, type AccentColor } from "@/lib/accent-color-provider"
import { cn } from "@/lib/utils"

const colors: { name: AccentColor; class: string }[] = [
  { name: "blue", class: "bg-blue-500" },
  { name: "green", class: "bg-emerald-500" },
  { name: "purple", class: "bg-violet-500" },
  { name: "orange", class: "bg-orange-500" },
  { name: "red", class: "bg-red-500" },
  { name: "pink", class: "bg-pink-500" },
]

export function AccentColorPicker() {
  const { accentColor, setAccentColor } = useAccentColor()
  const t = useTranslations('accentColor')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <div className={cn("h-4 w-4 rounded-full", colors.find(c => c.name === accentColor)?.class)} />
          <span className="sr-only">{t('chooseColor')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {colors.map((color) => (
          <DropdownMenuItem
            key={color.name}
            onClick={() => setAccentColor(color.name)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className={cn("h-4 w-4 rounded-full", color.class)} />
              <span>{t(color.name)}</span>
            </div>
            {accentColor === color.name && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

