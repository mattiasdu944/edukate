import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://qjzaxgwtmenwwhddpvuh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqemF4Z3d0bWVud3doZGRwdnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIwNzcyNzEsImV4cCI6MTk3NzY1MzI3MX0.vX_3Ylhrz_-PcHguD_imCHEOlOmV6U6AQBXRPQcmBnI"
);
