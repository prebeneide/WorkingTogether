# WorkingTogether

En kollaborativt arbeidsrom for remote samarbeid med video, lyd, tekstredigering, tegning, presentasjoner og AI-assistanse.

## 🚀 Teknologistack

### Web (Primær)
- **Framework:** Next.js 16+ med TypeScript
- **UI:** Tailwind CSS + shadcn/ui
- **Design:** Modern SaaS Design med Glassmorphism
- **Backend:** Supabase (PostgreSQL, Realtime, Auth, Storage)

### Mobil (Sekundær - Senere)
- **Framework:** Flutter 3.x
- **Backend:** Samme Supabase backend som web

## 📋 Status

### Fullført
- ✅ Next.js prosjekt setup
- ✅ Tailwind CSS konfigurert
- ✅ shadcn/ui installert
- ✅ Glassmorphism design system implementert
- ✅ Base komponenter (Card, Button, Input) med glassmorphism

### Neste steg
- [ ] Tema system (Dark/Light mode)
- [ ] Fargevelger system
- [ ] Internasjonalisering (i18n)
- [ ] Supabase setup
- [ ] Autentisering

## 🏗️ Prosjektstruktur

```
WorkingTogether/
├── web/                 # Next.js web applikasjon
│   ├── app/            # Next.js App Router
│   ├── components/    # React komponenter
│   └── lib/           # Utility funksjoner
├── PLAN.md            # Hovedplan
└── IMPLEMENTATION-GUIDE.md  # Steg-for-steg guide
```

## 🛠️ Utvikling

### Web
```bash
cd web
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## 📝 Dokumentasjon

- Se `PLAN.md` for fullstendig prosjektplan
- Se `IMPLEMENTATION-GUIDE.md` for implementeringsguide
- Skjulte filer (`.development-rules.md`, `.design-specs.md`) inneholder detaljerte spesifikasjoner

## 📄 Lisens

Privat prosjekt

