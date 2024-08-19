import Header from "../components/Header";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import Button from "../components/Button";
import IconList from "../components/IconList";
/* eslint-disable react/no-unescaped-entities */
export default function Homepage() {
  return (
    <div className="mx-auto lg:gap-10 grid w-[375px] sm:w-[550px] md:w-[700px] lg:w-[1000px] grid-cols-1 lg:grid-cols-2">
      <div className="relative mx-auto mt-5 lg:mb-10 lg:h-fit sm:w-[500px] md:w-[650px] lg:w-[500px]  -skew-x-3 bg-slate-200 px-10">
        <Header className="mb-5 mt-3 w-fit skew-x-12 bg-zinc-700 px-12 py-2 text-left font-header text-lg sm:text-3xl md:text-5xl lg:text-[32px] text-white">
          <div className="-skew-x-12">Luke Thorvilson</div>
        </Header>
        <IconList>
          <FaReact className="h-fit w-[25px] sm:w-[30px] md:w-11 skew-x-3 text-zinc-700" />
          <FaNodeJs className="h-fit w-[25px] sm:w-[30px] md:w-11 skew-x-3 text-zinc-700" />
          <FaPython className="h-fit w-[25px] sm:w-[30px] md:w-11 skew-x-3 text-zinc-700" />
          <IoLogoJavascript className="h-fit w-[25px] sm:w-[30px] md:w-11 skew-x-3 text-zinc-700" />
          <RiTailwindCssFill className="h-fit w-[25px] sm:w-[30px] md:w-11 skew-x-3 text-zinc-700" />
        </IconList>
        <div className="fadeInText mt-6 mb-2 sm:mb-6 h-40 w-[300px] text-left text-xl font-body">
          <ul className="list-none text-slate-700">
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">Software Engineer</li>
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">Aspiring Web Developer</li>
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">
              React.js, Node.js, Python, and JavaScript Developer
            </li>
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">
              Washington State University Alumni, Go Cougs!
            </li>
          </ul>
        </div>
        <div className="mb-4 flex">
          <Button className="mx-auto mt-6 w-[125px] skew-x-3 rounded-lg bg-zinc-700 px-2 py-3 text-center font-links text-[10px] sm:text-sm text-white hover:animate-pulse">
            Download CV
          </Button>
        </div>
      </div>
      <div className="relative lg:col-span-1 mx-auto mt-10 mb-5 w-[350px] sm:w-[400px] md:w-[450px] lg:w-[350px] ">
        <img
          className="h-full w-full rounded bg-gradient-to-t from-white to-black"
          src="/me-nobackground.JPG"
        ></img>
        {/* gives the faded effect */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[0px] h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </div>
  );
}
