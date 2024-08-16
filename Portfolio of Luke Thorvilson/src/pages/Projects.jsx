import Header from "../components/Header";
import ProjectsList from "../components/ProjectsList";
import Separator from "../components/Separator";
import Search from "../components/Search";
import Loader from "../components/Loader";
import useProjects from "../hooks/useProjects";
import { useState } from "react";

function Projects() {
  const [projects, error, isLoading] = useProjects();
  const [search, setSearch] = useState("");

  function getFilteredSearch() {
    if (search === null) return projects;
    return projects.filter((project) => {
      if (
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  return (
    <>
      <Header className="mx-auto mb-10 mt-8 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-center font-header text-5xl text-white">
        My Projects
      </Header>
      <p className="m-auto w-[75%] rounded-md bg-zinc-100 p-10 px-6 text-center text-xl text-zinc-700">
        Welcome to my projects page! Here, you’ll find a showcase of my work,
        both from my time at school and personal projects. Feel free to explore
        and see what I’ve been up to!
      </p>
      <Separator />
      {isLoading && <Loader />}
      {!isLoading && error && <p>{error.message}</p>}
      {!isLoading && !error && (
        <>
          <div className="m-auto mb-8 flex w-[90%] gap-4">
            <Search search={search} setSearch={setSearch} />
          </div>

          <ProjectsList projects={getFilteredSearch()} />
        </>
      )}
    </>
  );
}

export default Projects;
