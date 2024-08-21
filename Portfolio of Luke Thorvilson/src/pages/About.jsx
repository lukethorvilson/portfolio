import Header from "../components/Header";
import { SiRedux } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { LuTestTube2 } from "react-icons/lu";
import { CiCalculator2 } from "react-icons/ci";
import { RiTailwindCssFill } from "react-icons/ri";
import AboutSection from "../components/AboutSection";
import Separator from "../components/Separator";

export default function About() {
  return (
    <>
      <Header className="mx-auto mb-7 mt-8 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-center font-header text-3xl text-zinc-100 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        <div className="-skew-x-6">About Me</div>
      </Header>
      <p className="m-auto w-[85%] sm:w-[550px] md:w-[700px] lg:w-[950px] lg:text-xl xl:w-[1200px] xl:text-2xl md:text-base text-sm rounded-md bg-zinc-100 py-3 px-6 text-center text-zinc-700 font-body">
        Welcome to my about me page! Here, you’ll find more about who I am as a developer,
      such as some of my goals, skills, and interests. If you want to get to know me before we 
      meet in person, please do take a look at this page for the information I felt needed to be shared! Thank you!
      </p>
      <Separator />
      {/* pictures take up two spaces and text should take up 3 with a back and forth effect */}
      <div className="mx-8 my-8">
          <AboutSection
            title="Education"
            sectionNum={1}
            contentEl={
              <img
                src="/graduation.JPG"
                alt="My graduation picture"
                className="h-full w-full rounded-xl"
              ></img>
            }
            captionEl="🎓 Graduated from WSU in 2024 with a software engineering
                  degree. 🚀 Pursuing full-stack development, blending React and
                  Node.js expertise. Also dabbles in Python, C, and C++.
                  Passionate about crafting digital solutions that empower
                  users! 💻🌟"
          />

          <AboutSection
            title="Where I'm From!"
            sectionNum={2}
            captionEl="Based in the Seattle area, I’m actively seeking a full-stack
                internship opportunity. Passionate about UI/UX design, database
                management, and all things tech. Experienced in API development
                and open to new challenges. Let’s connect and build something
                amazing! 🚀"
            contentEl={
              <img
                src="/me-seattle.JPG"
                alt="My graduation picture"
                className="h-full w-full rounded-xl"
              ></img>
            }
          />
          <AboutSection
            title="Skills"
            sectionNum={3}
            noPicture={true}
            captionEl=
              "Skills include expertise in React, JavaScript, C++, Python,
                HTML, CSS, Tailwind, Next.js, C#, Spring Boot, testing
                frameworks, and algorithms."
            
            contentEl={
              <div className="mx-auto px-6 w-[250px] sm:w-[400px] skew-x-3 bg-zinc-100 p-2">
                <div className="my-2 flex -skew-x-6 justify-center gap-4">
                  <IoLogoJavascript className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <FaReact className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <FaNodeJs className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <SiRedux className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <FaPython className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                </div>
                <div className="flex w-full -skew-x-6 justify-center gap-4">
                  <SiDjango className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <LuTestTube2 className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <CiCalculator2 className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <FaHtml5 className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                  <RiTailwindCssFill className="h-fit w-[30px] sm:w-16 rounded bg-zinc-700 p-2 text-zinc-100" />
                </div>
              </div>
            }
          />
      </div>
    </>
  );
}
