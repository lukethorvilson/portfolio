import Header from "./Header";

function ProjectItem({ project }) {
  // eslint-disable-next-line no-unused-vars
  const { title, description, isAssisted, url, imageUrl } = project;
  console.log(project);
  return (
    <div className="m-auto mb-6 flex w-[90%] gap-8 rounded-md border-8 bg-zinc-700 p-2">
      <div className="relative my-auto h-full w-[45%]">
        <img
          className="h-full w-full rounded-lg"
          src={imageUrl}
          alt={`Image of ${title}`}
        />
      </div>

      <div className="relative w-[55%]">
        <Header className="mx-auto mb-4 mt-1 w-fit skew-x-6 bg-zinc-100 px-12 py-2 text-center font-header text-4xl text-zinc-700">
          <span className="-skew-x-6">{title}</span>
        </Header>
        <div className="mx-5 grid grid-cols-1 rounded-md bg-zinc-600 p-2 text-zinc-100">
          <h2 className="m-auto text-2xl underline">Description</h2>
          <p>{description}</p>
        </div>

        <p className="absolute bottom-0 left-0 text-zinc-100">
          Assisted Project:{" "}
          {isAssisted ? (
            <span className="text-green-500">True</span>
          ) : (
            <span className="text-red-500">False</span>
          )}
        </p>
        <p className="absolute bottom-0 right-2 text-zinc-100 hover:underline">
          <a href={url}>Go to project &rarr;</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
