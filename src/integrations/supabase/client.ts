// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gwrqprpqohhzvcsxkosa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3cnFwcnBxb2hoenZjc3hrb3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MTYyNzIsImV4cCI6MjA2Njk5MjI3Mn0.PUNwDLYMsxQakay9oKCX2JdKOrASyVHa0O1YAEEMhPk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});