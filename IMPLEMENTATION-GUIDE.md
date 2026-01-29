# Implementeringsguide - WorkingTogether

## 🎯 Oversikt

Denne guiden beskriver hvordan vi skal implementere prosjektet i små, oversiktlige steg.

## 📋 Fase 0: Design System & i18n (Først!)

### Steg 0.1: Next.js Setup
- [x] Opprett Next.js 14+ prosjekt med TypeScript
- [x] Konfigurer Tailwind CSS
- [x] Installer shadcn/ui
- [ ] Sett opp base komponenter

### Steg 0.2: Design System - Glassmorphism
- [x] Implementer glassmorphism utility classes
- [x] Lag base komponenter med glassmorphism (Card, Button, Input)
- [x] Test visuelt i både light og dark mode

### Steg 0.3: Tema System
- [x] Sett opp CSS variables for farger
- [x] Implementer dark/light mode switcher
- [x] Test tema-switching
- [x] Lagre tema-preferanse i localStorage

### Steg 0.4: Fargevelger System
- [x] Definer 6 hovedfarger (blå, grønn, lilla, oransje, rød, rosa)
- [x] Implementer CSS variables for hovedfarger
- [x] Lag fargevelger komponent
- [x] Test at farger påvirker tekstelementer og hovedelementer
- [ ] Lagre fargevalg i database (users.accent_color) - Gjøres senere med Supabase

### Steg 0.5: Internasjonalisering Setup
- [x] Installer next-intl
- [x] Konfigurer next-intl i Next.js
- [x] Opprett oversettelsesfiler for `en` og `no`
- [x] Implementer språkvelger i UI
- [x] Test språkbytte

### Steg 0.6: Locale Formatering
- [x] Implementer timezone detection (via browser / Intl API)
- [x] Implementer tidsformat (12/24-timers) basert på locale
- [x] Implementer datoformat basert på locale
- [x] Implementer tallformat med locale-spesifikke separatorer
- [x] Test formatering i begge språk (via LocaleDemo-komponent)

### Steg 0.7: Database Schema for i18n & Tema
- [x] Oppdater users tabell med locale, timezone, theme, accent_color (se `web/supabase_migration_users.sql`)
- [ ] Test database oppdateringer (gjøres når Supabase er satt opp)
- [x] Opprett migrasjoner (første migrasjon for `users`-tabellen laget)

## 📋 Fase 1: MVP - Grunnleggende Funksjoner

### Steg 1.1: Supabase Setup
- [x] Installer @supabase/supabase-js og @supabase/ssr
- [x] Opprett Supabase client utilities (client.ts og server.ts)
- [x] Opprett .env.example fil
- [ ] Opprett Supabase prosjekt (gjør dette manuelt på supabase.com)
- [ ] Konfigurer environment variables (kopier .env.example til .env.local og fyll inn)
- [ ] Test tilkobling til Supabase

### Steg 1.2: Autentisering
- [x] Implementer registrering (med i18n)
- [x] Implementer innlogging (med i18n)
- [x] Implementer utlogging
- [ ] Test autentisering

### Steg 1.3: Profil
- [ ] Lag profilside
- [ ] Implementer profilbilde-opplasting (Supabase Storage)
- [ ] Vis profilinformasjon
- [ ] Test profilfunksjonalitet

### Steg 1.4: Innstillinger
- [ ] Lag innstillinger-side
- [ ] Implementer tema-velger
- [ ] Implementer språk-velger
- [ ] Implementer farge-velger
- [ ] Lagre innstillinger i database
- [ ] Test alle innstillinger

### Steg 1.5: Venneliste
- [ ] Opprett friendships tabell i database
- [ ] Implementer søk etter brukere
- [ ] Implementer send venneforespørsel
- [ ] Implementer godta/avslå venneforespørsel
- [ ] Vis venneliste
- [ ] Test vennfunksjonalitet

### Steg 1.6: Direktemeldinger
- [ ] Opprett direct_messages tabell
- [ ] Implementer meldingsliste
- [ ] Implementer chat-interface
- [ ] Implementer sanntidsoppdateringer (Supabase Realtime)
- [ ] Test meldinger

### Steg 1.7: Rom
- [ ] Opprett rooms og room_members tabeller
- [ ] Implementer opprett rom
- [ ] Implementer vis romliste
- [ ] Implementer inviter brukere til rom
- [ ] Test romfunksjonalitet

### Steg 1.8: Video & Audio (WebRTC)
- [ ] Sett opp WebRTC
- [ ] Implementer webcam-deling
- [ ] Implementer mikrofon
- [ ] Implementer grid-visning av deltakere
- [ ] Implementer kontroller (mute/unmute, av/på kamera)
- [ ] Test video/audio

### Steg 1.9: Felles Notatark - Setup
- [ ] Installer Yjs eller ShareJS
- [ ] Opprett documents tabell
- [ ] Implementer opprett dokument i rom
- [ ] Test dokumentopprettelse

### Steg 1.10: Felles Notatark - Sanntidsredigering
- [ ] Implementer Yjs/ShareJS integrasjon
- [ ] Implementer sanntidsredigering
- [ ] Test at flere brukere kan redigere samtidig

### Steg 1.11: Felles Notatark - Cursor Synkronisering
- [ ] Implementer cursor-tracking
- [ ] Implementer visning av andre brukeres cursors
- [ ] Vis navn og profilbilde ved cursor
- [ ] Fargekoding per bruker
- [ ] Test cursor-synkronisering

### Steg 1.12: Felles Notatark - Grunnleggende Formatering
- [ ] Implementer fet tekst
- [ ] Implementer kursiv tekst
- [ ] Implementer understreket tekst
- [ ] Implementer tekstfarger
- [ ] Test formatering

## 🔄 Utviklingsprosess

### For hvert steg:
1. **Planlegg** - Les gjennom steg-beskrivelsen
2. **Implementer** - Gjør endringene i små commits
3. **Test** - Test funksjonaliteten grundig
4. **Commit** - Commit med beskrivende melding
5. **Push** - Push til GitHub
6. **Neste steg** - Gå videre til neste steg

### Commit-meldinger
Bruk beskrivende, naturlige commit-meldinger:
- `feat: add user authentication`
- `style: implement glassmorphism design`
- `feat: add dark mode support`
- `i18n: add Norwegian translations`

### Testing
- Test hver funksjon manuelt
- Test i både dark og light mode
- Test med begge språk (en/no)
- Test på mobil (responsive)

## 📝 Notater

- Alle store forklaringer lagres i skjulte filer (`.development-rules.md`, `.design-specs.md`)
- Kode-kommentarer skal skrives som om du skrev dem selv
- Følg mini-steg prinsippet - en ting om gangen

