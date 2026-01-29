-- Initial users table for Supabase with i18n & theme fields
-- Denne migrasjonen kan brukes når Supabase-prosjektet settes opp.

create table if not exists public.users (
  id uuid primary key references auth.users(id),
  username text unique,
  display_name text,
  avatar_url text,
  bio text,
  -- i18n & tema
  locale text default 'en',           -- f.eks. 'en', 'no'
  timezone text,                      -- f.eks. 'Europe/Oslo'
  theme text default 'system',        -- 'light', 'dark', 'system'
  accent_color text default 'blue',   -- 'blue', 'green', 'purple', 'orange', 'red', 'pink'
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enkel trigger for å oppdatere updated_at ved endringer
create or replace function public.set_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_timestamp_on_users on public.users;

create trigger set_timestamp_on_users
before update on public.users
for each row
execute function public.set_timestamp();


