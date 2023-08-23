import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_BACKEND_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const client = createClient(projectURL, anonKey);

export default client;
