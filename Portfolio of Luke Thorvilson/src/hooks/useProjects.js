import { useEffect, useState } from "react";
import { getProjects } from "../api/projectService";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function setProjectState() {
      try {
        setIsLoading(true);
        const { projects, error } = await getProjects();
        if(error) throw new Error("Failed to load projects.")
        if (projects.length > 0) setProjects(projects);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    }
    setProjectState();
  }, []);

  return [projects, error, isLoading];
}

export default useProjects;
