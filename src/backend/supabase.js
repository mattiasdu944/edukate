import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://laenrviyfjdjglwggvaa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZW5ydml5Zmpkamdsd2dndmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3MTY0NjksImV4cCI6MTk3NzI5MjQ2OX0.bkecVig34jxemA5I4y3E2VGnRWdAPwttHRIk2hBoIG4"
);
