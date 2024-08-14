import { useEffect, useState } from "react";
import { getProjects } from "../api/projectService";

function ProjectsList() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function setProjectState() {
      try {
        const { projects } = await getProjects();
        if (projects.length > 0) setProjects(projects);
      } catch (err) {
        setError(err);
      }
    }
    setProjectState();
  }, []);

  return (
    <div className="mx-auto grid grid-cols-1">
      <div>Project 1</div>
      <div>Project 2</div>
    </div>
  );
}

export default ProjectsList;
