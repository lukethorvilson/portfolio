import Header from "../components/Header";
import { SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { LuTestTube2 } from "react-icons/lu";
import { CiCalculator2 } from "react-icons/ci";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useRef } from "react";

export default function About() {
  const section1Pic = useRef(null);
  const section1 = useRef(null);
  const section2Pic = useRef(null);
  const section2 = useRef(null);
  const section3Pic = useRef(null);
  const section3 = useRef(null);

  // https://github.com/Swizec/useDimensions
  useEffect(function () {
    // when one of sections comes into view on page remove hidden class
    // cannot get these values becuase they have not rendered in yet so they will be undefined we must find a workaround for this so we can render in the values once the page scrolls to the right spot
    console.log(
      `Section 1: ${section1.current?.getBoundingClientRect().top}, section1Pic: ${section1Pic.current?.getBoundingClientRect().top}`,
    );
    console.log(
      `Section 2: ${section2.current?.getBoundingClientRect().top}, section2Pic: ${section2Pic.current?.getBoundingClientRect().top}`,
    );
    console.log(
      `Section 3: ${section3.current?.getBoundingClientRect().top}, section3Pic: ${section3Pic.current?.getBoundingClientRect().top}`,
    );
  }, []);

  return (
    <>
      <Header className="mx-auto mb-12 mt-8 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-center font-header text-5xl text-white">
        About Me
      </Header>
      {/* pictures take up two spaces and text should take up 3 with a back and forth effect */}
      <div className="mx-8 my-8">
        <div className="m-auto grid grid-cols-5 gap-4">
          <div ref={section1Pic} className="col-span-2 mb-9">
            <div className="m-auto w-fit rounded-xl bg-zinc-700 pb-2 pr-1">
              <img
                src="/graduation.JPG"
                alt="My graduation picture"
                className="mx-auto w-72 rounded-xl"
              ></img>
            </div>
          </div>
          <div ref={section1} className="col-span-3 mb-9 content-center">
            <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
              🎓 Graduated from WSU in 2024 with a software engineering degree.
              🚀 Pursuing full-stack development, blending React and Node.js
              expertise. Also dabbles in Python, C, and C++. Passionate about
              crafting digital solutions that empower users! 💻🌟
            </p>
          </div>
          <div ref={section2} className="col-span-3 mb-9 content-center">
            <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
              Based in the Seattle area, I’m actively seeking a full-stack
              internship opportunity. Passionate about UI/UX design, database
              management, and all things tech. Experienced in API development
              and open to new challenges. Let’s connect and build something
              amazing! 🚀
            </p>
          </div>
          <div ref={section2Pic} className="col-span-2 mb-9 content-center">
            <div className="m-auto w-fit rounded-xl bg-zinc-700 pb-2 pl-1">
              <img
                src="/me-seattle.JPG"
                alt="My graduation picture"
                className="mx-auto w-72 rounded-xl"
              ></img>
            </div>
          </div>
          <div ref={section3Pic} className="col-span-2 mb-9 content-center">
            <div className="m-auto h-fit w-fit skew-x-3 bg-zinc-700 p-4">
              <div className="my-4 flex w-full -skew-x-3 justify-center gap-4">
                <IoLogoJavascript className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <FaReact className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <FaNodeJs className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <SiRedux className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <FaPython className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
              </div>
              <div className="flex w-full -skew-x-3 justify-center gap-4">
                <SiDjango className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <LuTestTube2 className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <CiCalculator2 className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <FaHtml5 className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
                <RiTailwindCssFill className="h-fit w-16 rounded bg-zinc-100 p-2 text-zinc-700" />
              </div>
            </div>
          </div>
          <div ref={section3} className="col-span-3 mb-9 content-center">
            <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
              Skills include expertise in React, JavaScript, C++, Python, HTML,
              CSS, Tailwind, Next.js, C#, Spring Boot, testing frameworks, and
              algorithms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
