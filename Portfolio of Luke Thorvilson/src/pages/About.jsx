import Header from "../components/Header";
import { SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { LuTestTube2 } from "react-icons/lu";
import { CiCalculator2 } from "react-icons/ci";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Grid from "../components/Grid";

export default function About() {
  const [section1, setSection1] = useState(0);
  const [section2, setSection2] = useState(0);
  const [section3, setSection3] = useState(0);

  useEffect(function () {
    const id = window.addEventListener(
      "scroll",
      () => {
        setSection1(
          document.querySelector("#section1").getBoundingClientRect().bottom,
        );
        setSection2(
          document.querySelector("#section2").getBoundingClientRect().bottom,
        );
        setSection3(
          document.querySelector("#section3").getBoundingClientRect().bottom,
        );
      },
      true,
    );
    return function () {
      window.removeEventListener("scroll", id);
    };
  }, []);

  return (
    <>
      <Header className="mx-auto mb-16 mt-8 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-center font-header text-5xl text-white">
        About Me
      </Header>
      {/* pictures take up two spaces and text should take up 3 with a back and forth effect */}
      <div className="mx-8 my-8">
        <Grid cols={5} gap={4}>
          {section1 < 700 ? (
            <div id="section1" className="col-span-2 mb-9 mt-8">
              <div className="m-auto w-fit rounded-xl bg-zinc-700 pb-2 pr-1">
                <img
                  src="/graduation.JPG"
                  alt="My graduation picture"
                  className="mx-auto w-72 rounded-xl"
                ></img>
              </div>
            </div>
          ) : (
            <div id="section1" className="col-span-2 mb-9 mt-8">
              <div className="m-auto hidden w-fit rounded-xl bg-zinc-700 pb-2 pr-1">
                <img
                  src="/graduation.JPG"
                  alt="My graduation picture"
                  className="mx-auto w-72 rounded-xl"
                ></img>
              </div>
            </div>
          )}

          {section1 < 700 ? (
            <div className="col-span-3 mb-9 content-center">
              <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
                🎓 Graduated from WSU in 2024 with a software engineering
                degree. 🚀 Pursuing full-stack development, blending React and
                Node.js expertise. Also dabbles in Python, C, and C++.
                Passionate about crafting digital solutions that empower users!
                💻🌟
              </p>
            </div>
          ) : (
            <div className="col-span-3 mb-9 hidden content-center">
              <p className="hidden bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
                🎓 Graduated from WSU in 2024 with a software engineering
                degree. 🚀 Pursuing full-stack development, blending React and
                Node.js expertise. Also dabbles in Python, C, and C++.
                Passionate about crafting digital solutions that empower users!
                💻🌟
              </p>
            </div>
          )}

          {section2 < 700 ? (
            <div id="section2" className="col-span-3 mb-9 content-center">
              <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
                Based in the Seattle area, I’m actively seeking a full-stack
                internship opportunity. Passionate about UI/UX design, database
                management, and all things tech. Experienced in API development
                and open to new challenges. Let’s connect and build something
                amazing! 🚀
              </p>
            </div>
          ) : (
            <div id="section2" className="col-span-3 mb-9 content-center">
              <p className="hidden bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
                Based in the Seattle area, I’m actively seeking a full-stack
                internship opportunity. Passionate about UI/UX design, database
                management, and all things tech. Experienced in API development
                and open to new challenges. Let’s connect and build something
                amazing! 🚀
              </p>
            </div>
          )}
          {section2 < 700 ? (
            <div className="col-span-2 mb-9 content-center">
              <div className="m-auto w-fit rounded-xl bg-zinc-700 pb-2 pl-1">
                <img
                  src="/me-seattle.JPG"
                  alt="My graduation picture"
                  className="mx-auto w-72 rounded-xl"
                ></img>
              </div>
            </div>
          ) : (
            <div className="col-span-2 mb-9 content-center">
              <div className="m-auto hidden w-fit rounded-xl bg-zinc-700 pb-2 pl-1">
                <img
                  src="/me-seattle.JPG"
                  alt="My graduation picture"
                  className="mx-auto w-72 rounded-xl"
                ></img>
              </div>
            </div>
          )}

          {section3 < 700 ? (
            <div id="section3" className="col-span-2 mb-9 content-center">
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
          ) : (
            <div id="section3" className="col-span-2 mb-9 content-center">
              <div className="m-auto hidden h-fit w-fit skew-x-3 bg-zinc-700 p-4">
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
          )}

          {section3 < 700 ? (
            <div className="col-span-3 mb-9 content-center">
              <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
                Skills include expertise in React, JavaScript, C++, Python,
                HTML, CSS, Tailwind, Next.js, C#, Spring Boot, testing
                frameworks, and algorithms.
              </p>
            </div>
          ) : (
            <div className="col-span-3 mb-9 hidden content-center">
              <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
                Skills include expertise in React, JavaScript, C++, Python,
                HTML, CSS, Tailwind, Next.js, C#, Spring Boot, testing
                frameworks, and algorithms.
              </p>
            </div>
          )}
        </Grid>
      </div>
    </>
  );
}
