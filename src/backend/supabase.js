import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_KEY,
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);
