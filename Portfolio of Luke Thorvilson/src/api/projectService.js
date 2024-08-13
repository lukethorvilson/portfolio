import { supabase } from "./supabase";

export async function getProjects() {
  let { data: projects, error } = await supabase.from("Projects").select("*");
  console.log(projects);
  return { projects, error };
}
