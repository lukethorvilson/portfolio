import Header from "./Header";

function ProjectItem({ project }) {
  // eslint-disable-next-line no-unused-vars
  const { title, description, isAssisted, url, imageUrl } = project;

  return (
    <div className="relative m-auto mb-6 grid w-[350px] grid-cols-1 gap-4 rounded-md border-8 bg-zinc-700 p-2 sm:w-[575px] md:w-[700px] lg:w-[995px] lg:grid-cols-2 xl:w-[1200px]">
      <div className="relative mx-auto h-[325px] w-[300px] sm:w-[500px] sm:h-[350px] md:h-[300px] md:w-[675px] lg:col-span-1 lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[500px]">
        <Header className="mx-auto mb-4 mt-1 w-fit skew-x-6 bg-zinc-100 px-12 py-2 text-center font-header text-2xl md:text-3xl text-zinc-700 xl:mx-6 xl:text-6xl">
          <div className="-skew-x-6">{title}</div>
        </Header>
        <div className="mx-auto px-2 mb-5 grid grid-cols-1 rounded-md bg-zinc-600 p-2 text-zinc-100 md:w-[500px] xl:w-[550px]">
          <h2 className="xl:text-2xl m-auto text-lg underline sm:text-xl font-body">
            Description
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-body">{description}</p>
        </div>

        <div className="absolute bottom-0 mx-auto mb-6 h-10 w-[350px] sm:h-12 sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[600px]">
          <div className="relative h-full w-[300px] border-b-2 border-b-zinc-100 sm:w-[500px] md:w-[675px] lg:w-[400px] xl:w-[600px]">
            <p className="absolute bottom-1 left-0 text-zinc-100 text-sm sm:text-base lg:text-lg font-body">
              Assisted Project:{" "}
              {isAssisted ? (
                <span className="text-green-500">True</span>
              ) : (
                <span className="text-red-500">False</span>
              )}
            </p>
            <p className="absolute bottom-1 right-2 text-zinc-100 hover:underline text-sm sm:text-base lg:text-lg font-body">
              <a href={url}>Go to project &rarr;</a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto my-auto h-full w-[300px] sm:w-[450px] sm:h-[250px] md:h-[275px] md:w-[600px] lg:col-span-1 lg:h-[300px] lg:w-[450px] xl:w-[525px]">
        <img
          className="h-full w-full rounded-lg"
          src={imageUrl}
          alt={`Image of ${title}`}
        />
      </div>
    </div>
  );
}

export default ProjectItem;
