"use client"

import * as React from "react"
import { useFormatter, useNow, useLocale } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function LocaleDemo() {
  const locale = useLocale()
  const now = useNow()
  const format = useFormatter()

  const formattedDate = format.dateTime(now, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })

  const formattedTime = format.dateTime(now, {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  })

  const formattedNumber = format.number(1234567.89)

  const formattedCurrency = format.number(1999.5, {
    style: "currency",
    currency: locale === "no" ? "NOK" : "EUR",
  })

  return (
    <Card variant="glass" className="mt-4">
      <CardHeader>
        <CardTitle>Locale formatting</CardTitle>
        <CardDescription>Dato, tid og tall formatert for språket du har valgt.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p><span className="font-medium">Locale:</span> {locale}</p>
        <p><span className="font-medium">Dato:</span> {formattedDate}</p>
        <p><span className="font-medium">Tid:</span> {formattedTime}</p>
        <p><span className="font-medium">Tall:</span> {formattedNumber}</p>
        <p><span className="font-medium">Valuta:</span> {formattedCurrency}</p>
      </CardContent>
    </Card>
  )
}


