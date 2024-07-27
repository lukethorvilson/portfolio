import Header from "../components/Header";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import IconList from "../components/IconList";
import { IoLogoJavascript } from "react-icons/io5";
/* eslint-disable react/no-unescaped-entities */
export default function Homepage() {
  return (
    <div className="flex h-fit w-auto content-center justify-center overflow-auto p-16">
      <div className="relative m-6 mt-10 h-[500px] w-[450px]">
        <img
          className="h-full w-full rounded bg-gradient-to-t from-white to-black"
          src="/me-nobackground.JPG"
        ></img>
        <div className="pointer-events-none absolute inset-x-0 bottom-[0px] h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative content-center">
        <Header className="hover:animation-ping mt-3 w-fit skew-x-6 bg-zinc-700 px-4 py-2 text-left font-header text-3xl text-white">
          Luke Thorvilson
        </Header>
        <IconList>
          <FaReact className="h-11 w-11 text-zinc-700 motion-safe:animate-spin" />
          <FaNodeJs className="h-11 w-11 text-zinc-700" />
          <FaPython className="h-11 w-11 text-zinc-700" />
          <IoLogoJavascript className="h-11 w-11 text-zinc-700" />
        </IconList>
        <p className="fadeInText top-[20rem] h-40 w-[400px] bg-gray-500 text-xl">
          Hi, welcome to my portfolio! I'm pleased that you are here. Come
          explore, take a look at some of my work. I appreciate you're
          willingness to connect.
        </p>
      </div>
    </div>
  );
}
