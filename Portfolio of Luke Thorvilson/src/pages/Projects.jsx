import { getProjects } from "../api/projectService";

export default function Projects() {
  const { projects, error } = getProjects();
  console.log(projects);
  return <h1>Projects</h1>;
}
