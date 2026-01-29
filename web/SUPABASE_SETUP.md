# Supabase Setup Guide

## 📋 Steg-for-steg instruksjoner

### 1. Opprett Supabase Prosjekt

1. Gå til [https://supabase.com](https://supabase.com)
2. Logg inn eller opprett konto
3. Klikk på "New Project"
4. Fyll inn:
   - **Project Name:** WorkingTogether
   - **Database Password:** (velg et sterkt passord, husk dette!)
   - **Region:** Velg nærmeste region (f.eks. West Europe)
5. Klikk "Create new project"
6. Vent til prosjektet er opprettet (tar 1-2 minutter)

### 2. Hent API-nøkler

1. I Supabase dashboard, gå til **Settings** → **API** (eller klikk på "Connect to your project")
2. Du vil se flere alternativer:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL) - samme i alle tabs
   - **Publishable Key** (NY - anbefalt) - bruk denne!
   - **Anon Key (Legacy)** - gammel metode, fungerer fortsatt

3. **Anbefaling:** Bruk **Publishable Key** (den nye)
   - Den er designet for frontend-bruk
   - Mer sikker og fremtidssikker
   - Kopier verdien fra "API Keys" tab eller "App Frameworks" tab

4. Kopier disse verdiene:
   - **Project URL:** `https://nrdmrhbvbxaakrkcfdku.supabase.co`
   - **Publishable Key:** `sb_publishable_...` (starter med `sb_publishable_`)

### 3. Konfigurer Environment Variables

1. I prosjektet, kopier `.env.example` til `.env.local`:
   ```bash
   cp web/.env.example web/.env.local
   ```

2. Åpne `web/.env.local` og fyll inn verdiene:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-key-here
   ```
   
   **Viktig:** 
   - Bruk **Publishable Key** (starter med `sb_publishable_`) hvis du har den
   - Eller bruk **Anon Key (Legacy)** (starter med `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`) hvis du ikke har Publishable Key
   - Begge fungerer, men Publishable Key er anbefalt

### 4. Opprett Database Schema

1. I Supabase dashboard, gå til **SQL Editor**
2. Åpne filen `web/supabase_migration_users.sql`
3. Kopier innholdet og lim det inn i SQL Editor
4. Klikk "Run" for å kjøre migrasjonen
5. Dette oppretter `users` tabellen med alle nødvendige felt

### 5. Test Tilkobling

1. Start utviklingsserveren:
   ```bash
   cd web
   npm run dev
   ```

2. Åpne nettleseren og sjekk at det ikke er noen feil i konsollen
3. Du kan også teste manuelt ved å kalle `testSupabaseConnection()` funksjonen

## ✅ Verifisering

Etter setup skal du ha:
- ✅ Supabase prosjekt opprettet
- ✅ Environment variables konfigurert
- ✅ `users` tabell opprettet i database
- ✅ Ingen feil i konsollen når appen kjører

## 🔒 Sikkerhet

- **Ikke committ `.env.local` til git** (den er allerede i .gitignore)
- **Anon key er trygg å bruke i frontend** (den har Row Level Security)
- **Service role key skal ALDRI brukes i frontend** (kun på server)

## 📚 Neste Steg

Når Supabase er satt opp, kan du gå videre til:
- **Steg 1.2:** Autentisering (registrering og innlogging)

