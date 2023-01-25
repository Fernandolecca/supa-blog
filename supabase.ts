import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const api_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export default createClient(url, api_key);
