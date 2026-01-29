import { useTranslations } from 'next-intl'
import { RegisterForm } from "@/components/auth/register-form"
import Link from 'next/link'

export default function RegisterPage() {
  const t = useTranslations('auth')

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-md space-y-4">
        <RegisterForm />
        <div className="text-center text-sm">
          <Link href="/login" className="hover:underline">
            {t('alreadyHaveAccount')} {t('signIn')}
          </Link>
        </div>
      </div>
    </div>
  )
}

