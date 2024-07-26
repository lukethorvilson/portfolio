/* eslint-disable react/no-unescaped-entities */
export default function Homepage() {
  return (
    <>
      <h1 className="text-center">Welcome to my Portfolio, my name is Luke</h1>
      <div className="flex h-fit w-auto content-center justify-center overflow-auto p-32">
        <div className="relative m-6 mt-10 h-[500px] w-[450px]">
          <img
            className="h-full w-full rounded bg-gradient-to-t from-white to-black"
            src="/me-nobackground.JPG"
          ></img>
          <div className="pointer-events-none absolute inset-x-0 bottom-[0px] h-1/3 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="fadeInText relative top-[20rem] h-40 w-[400px] bg-gray-500 font-links text-xl">
          <p className="">
            Hi, welcome to my portfolio! I'm pleased that you are here. Come
            explore, take a look at some of my work. I appreciate you're
            willingness to connect.
          </p>
        </div>
      </div>
    </>
  );
}
