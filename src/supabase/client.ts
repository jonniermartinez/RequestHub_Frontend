import { createClient } from "@supabase/supabase-js";
// que es lo que hace el client
const projectURL = import.meta.env.VITE_BACKEND_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

const client = createClient(projectURL, anonKey);

export default client;
