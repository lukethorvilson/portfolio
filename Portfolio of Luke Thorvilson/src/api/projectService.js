import { supabase } from "./supabase";

export async function getProjects() {
  let { data: projects, error } = await supabase.from("Projects").select("*");
  return { projects, error };
}
