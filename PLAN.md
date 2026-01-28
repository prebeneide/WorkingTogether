# Plan for Kollaborativt Arbeidsrom - WorkingTogether

## 🎯 Prosjektoversikt

En omfattende web-basert kollaborativt arbeidsrom som lar brukere samarbeide i sanntid med video, lyd, tekstredigering, tegning, presentasjoner og AI-assistanse. Applikasjonen skal være fremtidsrettet, skalerbar og fungere på både desktop og mobil.

---

## 💡 Vurdering av Ideen

**Sterke sider:**
- Adresserer et reelt behov for remote samarbeid
- Kombinerer flere viktige funksjoner i én plattform
- Potensielt for både bedrifter og privatpersoner
- Modulær arkitektur gjør det mulig å bygge gradvis

**Utfordringer å tenke på:**
- Sanntidssynkronisering er komplekst (CRDT eller Operational Transform)
- Skalering av video/audio streaming
- Ytelse med mange samtidige brukere i samme rom
- Mobiloptimalisering for avanserte funksjoner

**Anbefaling:** Start med MVP (Minimum Viable Product) og bygg gradvis ut.

---

## 🏗️ Arkitektur & Teknologistack

### Frontend - Web (Primær)
- **Framework:** Next.js 14+ (React) med App Router
  - Server-side rendering for bedre ytelse
  - API routes for backend-integrasjon
  - Optimalisert for mobil og desktop
  - **Prioritet:** Høyest - bygges først
  
- **UI Framework:** 
  - Tailwind CSS for styling
  - shadcn/ui for komponenter
  - Framer Motion for animasjoner

### Frontend - Mobil (Sekundær - Bygges senere)
- **Framework:** Flutter 3.x
  - Cross-platform (iOS og Android)
  - Native app-deployment til App Store/Play Store
  - **Prioritet:** Lavere - bygges etter web er ferdig
  - Deler samme backend (Supabase) som web
  
- **Internasjonalisering (i18n):**
  - next-intl for flerspråklig støtte
  - Engelsk (default) og Norsk fra start
  - Enkel utvidelse til flere språk
  - Locale-basert formatering (dato, tid, tall, valuta)
  
- **Tema & Design:**
  - Dark mode og Light mode
  - Brukerdefinerte hovedfarger (6 alternativer)
  - Modern SaaS Design med Glassmorphism
  - CSS variables for dynamiske farger
  - System preference detection
  
- **Sanntidskommunikasjon:**
  - WebRTC for video/audio/skjermdeling
  - Socket.io eller Supabase Realtime for data-synkronisering
  - Yjs eller ShareJS for kollaborativ tekstredigering (CRDT)

- **Dokumentredigering:**
  - TipTap eller Lexical for rik tekstredigering
  - Fabric.js eller Konva.js for tegning/illustrasjon
  - React-PDF eller PDF.js for PDF-visning/redigering

- **Presentasjoner:**
  - Reveal.js eller custom løsning
  - Canvas API for tegning på slides

### Backend & Database
- **Supabase** (primært):
  - PostgreSQL database
  - Realtime subscriptions
  - Authentication (email, OAuth)
  - Storage for bilder/filer
  - Edge Functions for serverless logikk
  
- **Tilleggstjenester:**
  - WebRTC signaling server (TURN/STUN) - kan bruke Supabase Edge Functions eller egen server
  - AI API (OpenAI, Anthropic, eller lokal modell)

### Infrastruktur
- **Hosting:** 
  - Web: Vercel (Next.js) + Supabase Cloud
  - Mobil: App Store / Play Store (Flutter app)
- **CDN:** Vercel Edge Network (web)
- **File Storage:** Supabase Storage (delt mellom web og mobil)
- **Video/Audio:** WebRTC peer-to-peer (med TURN server for NAT traversal)
- **Backend:** Supabase (delt mellom web og mobil - samme API)

---

## 📋 Funksjoner - Detaljert Oversikt

### Fase 0: Grunnleggende Setup & Design System (Før MVP!)

#### 0.1 Design System & Tema
- [ ] Modern SaaS Design med Glassmorphism implementert
- [ ] Dark mode og Light mode
- [ ] Tema-switcher i UI
- [ ] 6 forhåndsdefinerte hovedfarger (blå, grønn, lilla, oransje, rød, rosa)
- [ ] Fargevelger i innstillinger
- [ ] Dynamisk fargeapplikasjon på tekstelementer og hovedelementer
- [ ] CSS variables system for tema

#### 0.2 Internasjonalisering (i18n)
- [ ] next-intl konfigurert
- [ ] Oversettelsesfiler for Engelsk (en) og Norsk (no)
- [ ] Språkvelger i UI
- [ ] Locale detection (automatisk + manuell)
- [ ] Timezone detection og håndtering
- [ ] Tidsformat (12/24-timers) basert på locale
- [ ] Datoformat basert på locale
- [ ] Tallformat med locale-spesifikke separatorer
- [ ] Valuta-støtte (kan aktiveres senere)

### Fase 1: MVP - Grunnleggende Funksjoner (Start her!)

#### 1.1 Brukerautentisering & Profil
- [ ] Registrering og innlogging (Supabase Auth)
- [ ] Profilside med profilbilde (Supabase Storage)
- [ ] Venneliste (følgere/følger-system)
- [ ] Søk etter brukere
- [ ] Grunnleggende profilinformasjon

#### 1.2 Meldinger
- [ ] Direktemeldinger mellom brukere
- [ ] Sanntidsoppdateringer (Supabase Realtime)
- [ ] Notifikasjoner
- [ ] Emoji og filvedlegg

#### 1.3 Kollaborative Rom
- [ ] Opprette rom
- [ ] Invitere brukere til rom
- [ ] Romliste og historikk
- [ ] Grunnleggende rominformasjon

#### 1.4 Video & Audio (WebRTC)
- [ ] Webcam-deling
- [ ] Mikrofon (mute/unmute)
- [ ] Vis alle deltakere i grid
- [ ] Grunnleggende kontroller (av/på for kamera/mikrofon)

#### 1.5 Felles Notatark (Sanntid)
- [ ] Delte dokumenter i rommet
- [ ] Sanntidsredigering med Yjs eller ShareJS
- [ ] Vis hvem som skriver (cursor med navn og bilde)
- [ ] Grunnleggende tekstformatering (fet, kursiv, understreket)
- [ ] Farger for tekst

### Fase 2: Avansert Dokumentredigering

#### 2.1 Rik Tekstredigering
- [ ] Full formatering (font, størrelse, farger)
- [ ] Lister (nummerert, punktliste)
- [ ] Tabeller
- [ ] Lenker
- [ ] Bilder (drag & drop, URL)
- [ ] Undo/Redo
- [ ] Kommentarer på tekst

#### 2.2 Tegning & Illustrasjon
- [ ] Tegneverktøy (pensel, linjer, former)
- [ ] Fargepalett
- [ ] Penselstørrelse
- [ ] Lagre tegninger som bilder
- [ ] Eksportere som PNG/SVG

#### 2.3 Musepeker Synkronisering
- [ ] Sanntidsvisning av alle brukeres musepekere
- [ ] Navn og profilbilde ved cursor
- [ ] Fargekoding per bruker
- [ ] Smooth animasjoner

### Fase 3: Presentasjoner & Skjermdeling

#### 3.1 Presentasjonsverktøy
- [ ] Opprette slides
- [ ] Legge til tekst, bilder, former
- [ ] Animasjoner og overganger
- [ ] Presentasjonsmodus
- [ ] Eksportere som PDF

#### 3.2 Skjermdeling
- [ ] Del hele skjermen
- [ ] Del spesifikk app/vindu
- [ ] Kontroller for deler (pause/resume)
- [ ] Vis hvem som deler skjerm

### Fase 4: AI-Funksjoner

#### 4.1 Delt AI Chat
- [ ] Felles chat med AI i rommet
- [ ] Alle kan se samtalen
- [ ] Kontekstbevissthet (husker rommets innhold)
- [ ] Forslag basert på dokumentinnhold

#### 4.2 Personlig AI Chat
- [ ] Privat AI-assistent per bruker
- [ ] Hjelp med redigering, forslag, oversettelse
- [ ] Integrasjon med dokumenter

#### 4.3 AI-Funksjoner
- [ ] Tekstgenerering
- [ ] Oversettelse
- [ ] Sammanfatning av dokumenter
- [ ] Forslag til forbedringer
- [ ] Kodehjelp (hvis relevant)

### Fase 5: Historie & Logging

#### 5.1 Aktivitetslogg
- [ ] Logg alle handlinger i rommet
- [ ] Tidsstempel
- [ ] Hvem gjorde hva
- [ ] Filtrering og søk

#### 5.2 Versjonskontroll
- [ ] Lagre versjoner av dokumenter
- [ ] Gå tilbake til tidligere versjoner
- [ ] Vis endringer mellom versjoner
- [ ] Restore-funksjonalitet

### Fase 6: Mobiloptimalisering

#### 6.1 Responsiv Design
- [ ] Optimalisert for mobil
- [ ] Touch-gestures
- [ ] Mobilvennlig navigasjon

#### 6.2 Mobilfunksjoner
- [ ] Video/audio på mobil
- [ ] Grunnleggende tekstredigering
- [ ] Tegning med touch
- [ ] Notifikasjoner

---

## 🎨 Tilleggsfunksjoner (Fremtidige Forbedringer)

### Kollaborasjon
- [ ] Whiteboard med uendelig canvas
- [ ] Sticky notes
- [ ] Polling/avstemming
- [ ] Tidsplanlegging og kalender
- [ ] Oppgaver og todo-lister
- [ ] Fil-deling og versjonskontroll
- [ ] Kode-redigering med syntax highlighting (Monaco Editor)

### Kommunikasjon
- [ ] Gruppechat i rommet
- [ ] Voice messages
- [ ] Reaksjoner på meldinger (emoji)
- [ ] @mentions
- [ ] Screen annotations (tegne på delt skjerm)

### Organisering
- [ ] Prosjekter og mapper
- [ ] Tags og kategorier
- [ ] Favoritter
- [ ] Arkiv
- [ ] Eksport (PDF, Word, Markdown)

### Integrasjoner
- [ ] Google Drive / Dropbox
- [ ] Slack / Microsoft Teams
- [ ] GitHub (for kode)
- [ ] Figma / Adobe Creative Cloud

### Avansert
- [ ] 3D-modellering
- [ ] Video-redigering
- [ ] Audio-redigering
- [ ] Virtual Reality support (fremtidig)
- [ ] AI-genererte bilder i dokumenter
- [ ] Automatisk oversettelse av chat

---

## 📊 Database Schema (Supabase)

### Tabeller

```sql
-- Brukere (utvidet fra Supabase Auth)
users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  locale TEXT DEFAULT 'en', -- 'en', 'no', etc.
  timezone TEXT, -- 'Europe/Oslo', 'America/New_York', etc.
  theme TEXT DEFAULT 'system', -- 'light', 'dark', 'system'
  accent_color TEXT DEFAULT 'blue', -- 'blue', 'green', 'purple', 'orange', 'red', 'pink'
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Vennskap
friendships (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  friend_id UUID REFERENCES users(id),
  status TEXT, -- 'pending', 'accepted', 'blocked'
  created_at TIMESTAMP
)

-- Rom
rooms (
  id UUID PRIMARY KEY,
  name TEXT,
  description TEXT,
  owner_id UUID REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  settings JSONB -- rom-spesifikke innstillinger
)

-- Rommedlemmer
room_members (
  id UUID PRIMARY KEY,
  room_id UUID REFERENCES rooms(id),
  user_id UUID REFERENCES users(id),
  role TEXT, -- 'owner', 'admin', 'member'
  joined_at TIMESTAMP
)

-- Dokumenter
documents (
  id UUID PRIMARY KEY,
  room_id UUID REFERENCES rooms(id),
  title TEXT,
  type TEXT, -- 'text', 'presentation', 'drawing'
  content JSONB, -- Yjs dokument eller annen struktur
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Meldinger
messages (
  id UUID PRIMARY KEY,
  room_id UUID REFERENCES rooms(id),
  sender_id UUID REFERENCES users(id),
  content TEXT,
  type TEXT, -- 'text', 'file', 'system'
  created_at TIMESTAMP
)

-- Direktemeldinger
direct_messages (
  id UUID PRIMARY KEY,
  sender_id UUID REFERENCES users(id),
  receiver_id UUID REFERENCES users(id),
  content TEXT,
  read_at TIMESTAMP,
  created_at TIMESTAMP
)

-- Aktivitetslogg
activity_logs (
  id UUID PRIMARY KEY,
  room_id UUID REFERENCES rooms(id),
  user_id UUID REFERENCES users(id),
  action TEXT, -- 'create', 'edit', 'delete', 'join', 'leave'
  entity_type TEXT, -- 'document', 'message', 'room'
  entity_id UUID,
  details JSONB,
  created_at TIMESTAMP
)

-- AI Chat (delt)
ai_chat_messages (
  id UUID PRIMARY KEY,
  room_id UUID REFERENCES rooms(id),
  user_id UUID REFERENCES users(id),
  message TEXT,
  is_ai BOOLEAN,
  created_at TIMESTAMP
)

-- AI Chat (personlig)
personal_ai_chat (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  message TEXT,
  is_ai BOOLEAN,
  created_at TIMESTAMP
)
```

---

## 🚀 Implementeringsplan

### Sprint 0: Design System & i18n Setup (1-2 uker)
1. Next.js prosjekt setup
2. Tailwind CSS + shadcn/ui konfigurert
3. Design system med Glassmorphism
4. Dark/Light mode implementert
5. Fargevelger system
6. next-intl konfigurert
7. Oversettelsesfiler (en/no)
8. Locale detection og formatering
9. Timezone håndtering

### Sprint 1-2: Grunnleggende Setup (2-3 uker)
1. Supabase konfigurasjon
2. Autentisering (login/registrering) - med i18n
3. Grunnleggende UI/UX med design system
4. Profilside med profilbilde (Supabase Storage)
5. Innstillinger-side (tema, språk, farger)

### Sprint 3-4: Meldinger & Venner (2 uker)
1. Venneliste og søk
2. Direktemeldinger
3. Sanntidsoppdateringer
4. Notifikasjoner

### Sprint 5-6: Rom & Video (3-4 uker)
1. Opprette/invitere til rom
2. WebRTC setup (video/audio)
3. Grid-visning av deltakere
4. Grunnleggende kontroller

### Sprint 7-8: Felles Notatark (3-4 uker)
1. Yjs/ShareJS integrasjon
2. Sanntidsredigering
3. Cursor-synkronisering med navn/bilde
4. Grunnleggende formatering

### Sprint 9-10: Avansert Redigering (4-5 uker)
1. Rik tekstredigering (TipTap/Lexical)
2. Bilder og media
3. Tegneverktøy
4. Forbedret formatering

### Sprint 11-12: Presentasjoner & Skjermdeling (3-4 uker)
1. Slide-system
2. Skjermdeling (WebRTC)
3. Presentasjonsmodus

### Sprint 13-14: AI & Historie (3-4 uker)
1. AI chat (delt og personlig)
2. Aktivitetslogg
3. Versjonskontroll

### Sprint 15+: Web Mobil-optimalisering (2-3 uker)
1. Responsiv design for web på mobil
2. Touch-optimaliserte kontroller
3. PWA (Progressive Web App) for web-installasjon
4. Ytelsesoptimalisering
5. Testing

### Sprint 16+: Flutter Mobil-app (4-6 uker) - SENERE
1. Flutter prosjekt setup
2. Supabase Flutter SDK integrasjon
3. Autentisering (deler samme backend)
4. Hovedfunksjoner (meldinger, rom, video, dokumenter)
5. Native app-deployment til App Store/Play Store

---

## 🔧 Tekniske Utfordringer & Løsninger

### 1. Sanntidssynkronisering
**Utfordring:** Konflikter når flere redigerer samtidig
**Løsning:** Bruk CRDT (Conflict-free Replicated Data Types) med Yjs eller ShareJS

### 2. Video/Audio Skalering
**Utfordring:** Mange samtidige brukere kan være tungt
**Løsning:** 
- Peer-to-peer med WebRTC (begrenset antall direkte forbindelser)
- Selective forwarding (kun vise aktive deltakere)
- Adaptive bitrate

### 3. Ytelse med Store Dokumenter
**Utfordring:** Store dokumenter kan være trege
**Løsning:**
- Lazy loading
- Virtual scrolling
- Komprimering av data
- Caching strategier

### 4. Mobiloptimalisering
**Utfordring:** Komplekse funksjoner på mobil
**Løsning:**
- Progressive Web App (PWA)
- Touch-optimaliserte kontroller
- Forenklet UI på mobil
- Offline-støtte

---

## 📱 PWA (Progressive Web App)

- Installerbar på mobil og desktop
- Offline-støtte for visning av dokumenter
- Push-notifikasjoner
- App-lignende opplevelse

---

## 🔒 Sikkerhet & Personvern

- End-to-end kryptering for meldinger (valgfritt)
- GDPR-kompatibel
- Rettighetsstyring (hvem kan redigere/se)
- Audit log for sensitive handlinger
- Dataeksport for brukere

---

## 📈 Skalering & Ytelse

- CDN for statiske ressurser
- Database-indeksering
- Caching strategier
- Load balancing
- Monitoring og analytics

---

## 🧪 Testing Strategi

- Unit tests (Jest/Vitest)
- Integration tests
- E2E tests (Playwright/Cypress)
- Sanntidstesting med flere brukere
- Ytelsestesting

---

## 📝 Dokumentasjon

- API-dokumentasjon
- Brukerguide
- Utviklerdokumentasjon
- Deployment-guide

---

## 🎯 MVP Scope (Minimum Viable Product)

**Web MVP (Først):**
1. ✅ Design system (Glassmorphism, Dark/Light mode, fargevelger)
2. ✅ Internasjonalisering (en/no, locale formatering)
3. ✅ Brukerautentisering og profiler
4. ✅ Grunnleggende meldinger
5. ✅ Rom med video/audio
6. ✅ Felles notatark med sanntidsredigering
7. ✅ Musepeker-synkronisering
8. ✅ Grunnleggende tekstformatering
9. ✅ Responsiv design (web på mobil)
10. ✅ PWA for web-installasjon

**Ikke i Web MVP:**
- Presentasjoner
- Tegneverktøy
- Skjermdeling
- AI
- Avansert historie
- Native mobil-app (bygges senere)

**Mobil-app (Senere - etter Web MVP):**
- Flutter-app med samme funksjonalitet som web
- Native App Store/Play Store deployment

---

## 📐 Utviklingsregler & Prinsipper

### Mini-steg Prinsipp
- **VIKTIG:** All utvikling skal skje i små, oversiktlige steg
- Hver endring skal være liten nok til at du kan følge med
- En steg om gangen, test, deretter neste steg
- Hver commit til GitHub skal representere et logisk, fullført mini-steg

### Autentisk Utvikling
- Prosjektet skal se ut som du har utviklet det selv
- Alle kommentarer i koden skal skrives som om du skrev dem selv
- Commit-meldinger skal være naturlige og personlige
- Store forklaringer lagres i skjulte filer (`.development-rules.md`, `.design-specs.md`)

### GitHub
- Prosjektet skal være på GitHub
- Alle commits skal se ut som dine egne
- Ikke inkluder referanser til AI-assistanse

*Se `.development-rules.md` for fullstendige regler*

---

## 💰 Kostnader (Estimert)

- **Supabase:** Gratis tier opp til 500MB database, deretter ~$25/måned
- **Vercel:** Gratis for hobby, deretter ~$20/måned
- **TURN Server:** ~$10-50/måned (avhengig av trafikk)
- **AI API:** Pay-per-use (varierer)
- **Domain:** ~$10-15/år

**Total MVP:** ~$0-50/måned (avhengig av bruk)

---

## 🚦 Neste Steg

1. **Godkjenn planen** - Gjennomgå og juster etter behov
2. **Sett opp prosjekt** - Next.js + Supabase
3. **Start med MVP** - Følg implementeringsplanen
4. **Iterativ utvikling** - Test og forbedre kontinuerlig

---

## 📞 Støtte & Ressurser

- Supabase dokumentasjon
- WebRTC guides
- Yjs dokumentasjon
- Next.js dokumentasjon

---

**Plan opprettet:** $(date)
**Versjon:** 1.0
**Status:** Klar for gjennomgang

