"use client"

import { useTranslations } from 'next-intl'
import { useAuth } from "@/lib/auth/hooks"
import { LogoutButton } from "./logout-button"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function AuthButtons() {
  const t = useTranslations('auth')
  const { user, loading } = useAuth()

  if (loading) {
    return null
  }

  if (user) {
    return <LogoutButton />
  }

  return (
    <>
      <Link href="/login">
        <Button variant="ghost">{t('login')}</Button>
      </Link>
      <Link href="/register">
        <Button>{t('register')}</Button>
      </Link>
    </>
  )
}

