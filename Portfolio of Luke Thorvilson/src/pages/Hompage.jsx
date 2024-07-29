import Header from "../components/Header";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import IconList from "../components/IconList";
import { IoLogoJavascript } from "react-icons/io5";
import Button from "../components/Button";
/* eslint-disable react/no-unescaped-entities */
export default function Homepage() {
  return (
    <div className="flex h-fit w-auto content-center justify-center overflow-auto p-10">
      <div className="relative m-6 mt-10 h-[575px] w-[450px]">
        <img
          className="h-full w-full rounded bg-gradient-to-t from-white to-black"
          src="/me-nobackground.JPG"
        ></img>
        {/* gives the faded effect */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[0px] h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative -skew-x-3 content-center bg-slate-200 px-36">
        <Header className="mb-5 mt-3 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-left font-header text-5xl text-white">
          Luke Thorvilson
        </Header>
        <IconList>
          <FaReact className="h-11 w-11 skew-x-3 text-zinc-700" />
          <FaNodeJs className="h-11 w-11 skew-x-3 text-zinc-700" />
          <FaPython className="h-11 w-11 skew-x-3 text-zinc-700" />
          <IoLogoJavascript className="h-11 w-11 skew-x-3 text-zinc-700" />
        </IconList>
        <div className="fadeInText mt-6 h-40 w-[450px] text-left text-xl">
          <ul className="list-none text-slate-700">
            <li className="mb-3">Software Engineer</li>
            <li className="mb-3">Aspiring Web Developer</li>
            <li className="mb-3">
              React.js, Node.js, Python, and JavaScript Developer
            </li>
            <li className="mb-3">
              Washington State University Alumni, Go Cougs!
            </li>
          </ul>
        </div>
        <div className="flex">
          <Button className="mx-auto mt-6 w-36 skew-x-3 rounded-lg bg-zinc-700 px-2 py-3 text-center font-links text-white hover:animate-pulse">
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
}
