import Header from "../components/Header";
import ProjectsList from "../components/ProjectsList";
import Separator from "../components/Separator";

function Projects() {
  return (
    <>
      <Header className="mx-auto mb-10 mt-8 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-center font-header text-5xl text-white">
        My Projects
      </Header>
      <p className="bg-zinc-50 px-6 text-center text-xl text-zinc-700">
        Welcome to my projects page, feel free to look at some projects I've
        completed in school or outside of school!
      </p>
      <Separator />
      <ProjectsList />
    </>
  );
}

export default Projects;
