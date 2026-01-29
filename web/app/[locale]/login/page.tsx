import { useTranslations } from 'next-intl'
import { LoginForm } from "@/components/auth/login-form"
import Link from 'next/link'

export default function LoginPage() {
  const t = useTranslations('auth')

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-md space-y-4">
        <LoginForm />
        <div className="text-center text-sm">
          <Link href="/register" className="hover:underline">
            {t('dontHaveAccount')} {t('signUp')}
          </Link>
        </div>
      </div>
    </div>
  )
}

