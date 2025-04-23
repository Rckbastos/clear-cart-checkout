
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "@supabase/supabase-js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Initialize Supabase client with direct values
// Replace these with your actual Supabase project credentials from your Supabase dashboard
const supabaseUrl = "https://vedxvhmdigtwfqqpyejl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZHh2aG1kaWd0d2ZxcXB5ZWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNTg2NDEsImV4cCI6MjA2MDkzNDY0MX0.AyTu8zbqPc7IAf1MDeb-xPC6O6ggGg2ZSrhzq_4Had4"

// Create a mock client for handling errors or the real client
const createSupabaseClient = () => {
  if (!supabaseUrl.includes("your-project-url") && !supabaseAnonKey.includes("your-anon-key")) {
    // Valid credentials provided
    return createClient(supabaseUrl, supabaseAnonKey)
  } else {
    console.error("⚠️ Please replace the placeholder Supabase credentials in src/lib/utils.ts with your actual Supabase URL and anon key")
    // Return a mock client that shows a helpful error message
    return {
      auth: {
        signInWithPassword: () => Promise.resolve({ error: { message: "Supabase credentials not configured" } }),
        signUp: () => Promise.resolve({ error: { message: "Supabase credentials not configured" } }),
        getSession: () => Promise.resolve({ data: { session: null } }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
      }
    } as any;
  }
}

// Export the supabase client
export const supabase = createSupabaseClient();
