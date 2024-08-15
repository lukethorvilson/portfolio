import { useEffect, useState } from "react";
import { getProjects } from "../api/projectService";
import ProjectItem from "./ProjectItem";

function ProjectsList({ projects }) {
  if (!projects.length)
    return (
      <p className="w-[100%] text-center my-10 text-2xl text-zinc-700">Nothing to see here...😰</p>
    );
  return (
    <div className="mx-auto grid h-fit w-full grid-cols-1 gap-10">
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default ProjectsList;
