// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://acyktjqwauvkvvtxklns.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjeWt0anF3YXV2a3Z2dHhrbG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTQ0NzUsImV4cCI6MjA2Mjk5MDQ3NX0.wUPpbzx0mwAr3S88mBqKNk1aeR_OTclhjicYVwfKOV4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);