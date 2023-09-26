// import { createClient } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://qtfifrbvjxyihxiwehfm.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0ZmlmcmJ2anh5aWh4aXdlaGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyMDAxNDQsImV4cCI6MjAwNTc3NjE0NH0.vfj4oE1f8chpYB9KTmt7fZVV_I66tpc0JyluHuRV_gA";
// const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseUrl = "https://onleqitgrqjarultbhpv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ubGVxaXRncnFqYXJ1bHRiaHB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NTY5NjUsImV4cCI6MjAxMTEzMjk2NX0.obvDdvYr5bPm3tGTOrbCGvKZpqknhfmHVw-6li1wq0k";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
