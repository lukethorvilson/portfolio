import Header from "../components/Header";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import IconList from "../components/IconList";
/* eslint-disable react/no-unescaped-entities */
export default function Homepage() {
  return (
    <div className="mx-auto grid w-[375px] grid-cols-1 sm:w-[550px] md:w-[700px] lg:w-[1000px] lg:grid-cols-2 lg:gap-10">
      <div className="relative mx-auto mt-5 -skew-x-3 bg-slate-200 px-10 sm:w-[500px] md:w-[650px] lg:mb-10 lg:h-fit lg:w-[500px]">
        <Header className="mb-5 mt-3 w-fit skew-x-12 bg-zinc-700 px-12 py-2 text-left font-header text-lg text-white sm:text-3xl md:text-5xl lg:text-[32px]">
          <div className="-skew-x-12">Luke Thorvilson</div>
        </Header>
        <IconList>
          <FaReact className="h-fit w-[25px] skew-x-3 text-zinc-700 sm:w-[30px] md:w-11" />
          <FaNodeJs className="h-fit w-[25px] skew-x-3 text-zinc-700 sm:w-[30px] md:w-11" />
          <FaPython className="h-fit w-[25px] skew-x-3 text-zinc-700 sm:w-[30px] md:w-11" />
          <IoLogoJavascript className="h-fit w-[25px] skew-x-3 text-zinc-700 sm:w-[30px] md:w-11" />
          <RiTailwindCssFill className="h-fit w-[25px] skew-x-3 text-zinc-700 sm:w-[30px] md:w-11" />
        </IconList>
        <div className="fadeInText font-body mb-2 mt-6 h-40 w-[300px] text-left text-xl sm:mb-6">
          <ul className="list-none text-slate-700">
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">
              Software Engineer
            </li>
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">
              Aspiring Web Developer
            </li>
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">
              React.js, Node.js, Python, and JavaScript Developer
            </li>
            <li className="mb-3 skew-x-3 text-sm sm:text-base md:text-lg">
              Washington State University Alumni, Go Cougs!
            </li>
          </ul>
        </div>
        <div className="mb-4 flex">
          <a
            className="mx-auto mt-6"
            href="/luke_thorvilson_resume.pdf"
            download="Luke_Thorvilson_Resume"
          >
            <button className="w-[125px] skew-x-3 rounded-lg bg-zinc-700 px-2 py-3 text-center font-links text-[10px] text-white hover:animate-pulse sm:text-sm">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="relative mx-auto mb-5 mt-10 w-[350px] sm:w-[400px] md:w-[450px] lg:col-span-1 lg:w-[350px]">
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
