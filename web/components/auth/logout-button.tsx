"use client"

import * as React from "react"
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth/actions"

export function LogoutButton() {
  const t = useTranslations('auth')
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
      await signOut()
      router.refresh()
      router.push('/login')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      variant="ghost" 
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? t('loading') : t('logout')}
    </Button>
  )
}

