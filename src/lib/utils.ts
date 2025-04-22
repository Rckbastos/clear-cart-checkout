import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { createClient } from "@supabase/supabase-js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Initialize Supabase client with direct values
// Replace these with your actual Supabase project credentials from your Supabase dashboard
const supabaseUrl = "https://your-project-url.supabase.co"
const supabaseAnonKey = "your-anon-key"

// Verify that we have the required credentials
if (!supabaseUrl.includes("your-project-url") && !supabaseAnonKey.includes("your-anon-key")) {
  // Only create the client if valid credentials are provided
  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.error("⚠️ Please replace the placeholder Supabase credentials in src/lib/utils.ts with your actual Supabase URL and anon key")
  // Create a mock client that will show a helpful error message if used
  export const supabase = {
    auth: {
      signInWithPassword: () => Promise.resolve({ error: { message: "Supabase credentials not configured" } }),
      signUp: () => Promise.resolve({ error: { message: "Supabase credentials not configured" } }),
      getSession: () => Promise.resolve({ data: { session: null } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    }
  } as any;
}

