import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { AccentColorPicker } from "@/components/accent-color-picker";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocaleDemo } from "@/components/locale-demo";
import { AuthButtons } from "@/components/auth/auth-buttons";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="text-center space-y-4 flex-1">
          <h1 className="text-4xl font-bold">{t('common.title')}</h1>
          <p className="text-muted-foreground">{t('test.title')}</p>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <AccentColorPicker />
          <ThemeSwitcher />
          <AuthButtons />
        </div>
      </div>

      {/* Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>{t('test.glassCard')}</CardTitle>
            <CardDescription>Standard glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card uses the glass variant with backdrop blur and transparency.</p>
          </CardContent>
        </Card>

        <Card variant="glass-light">
          <CardHeader>
            <CardTitle>{t('test.lightGlass')}</CardTitle>
            <CardDescription>Lighter glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card uses the glass-light variant with more transparency.</p>
          </CardContent>
        </Card>

        <Card variant="glass-strong">
          <CardHeader>
            <CardTitle>{t('test.strongGlass')}</CardTitle>
            <CardDescription>Stronger glassmorphism effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This card uses the glass-strong variant with more opacity.</p>
          </CardContent>
        </Card>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Glassmorphism Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="glass">{t('test.glassButton')}</Button>
          <Button variant="glass-light">{t('test.lightGlassButton')}</Button>
          <Button variant="default">{t('test.primaryButton')}</Button>
          <Button variant="outline" style={{ borderColor: "var(--accent-color)", color: "var(--accent-color)" }} className="hover:opacity-80">{t('test.accentOutline')}</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {t('test.buttonDescription')}
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Glassmorphism Inputs</h2>
        <div className="max-w-md space-y-4">
          <Input variant="glass" placeholder={t('test.glassInput')} />
          <Input variant="default" placeholder={t('test.defaultInput')} />
        </div>
      </div>
      
      {/* Links */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('test.accentLinks')}</h2>
        <div className="space-y-2">
          <a href="#" style={{ color: "var(--accent-color)" }} className="hover:underline">This is a link with accent color</a>
          <p className="text-sm text-muted-foreground">
            {t('test.linkDescription')}
          </p>
        </div>
      </div>

      {/* Default Card for comparison */}
      <div className="max-w-md">
        <Card variant="default">
          <CardHeader>
            <CardTitle>{t('test.defaultCard')}</CardTitle>
            <CardDescription>{t('test.standardCard')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This is a regular card for comparison.</p>
          </CardContent>
        </Card>
      </div>

      {/* Locale formatting demo */}
      <LocaleDemo />
    </div>
  );
}

