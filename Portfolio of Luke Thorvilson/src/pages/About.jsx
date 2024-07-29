import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header className="mx-auto mb-5 mt-3 w-fit skew-x-6 bg-zinc-700 px-12 py-2 text-center font-header text-5xl text-white">
        About Me
      </Header>
      {/* pictures take up two spaces and text should take up 3 with a back and forth effect */}
      <div className="mx-8 my-8">
        <div className="m-auto grid grid-cols-5 gap-4">
          <div className="col-span-2 mb-9">
            <div className="m-auto w-fit rounded-xl bg-zinc-700 pb-2 pr-1">
              <img
                src="/graduation.JPG"
                alt="My graduation picture"
                className="mx-auto w-72 rounded-xl"
              ></img>
            </div>
          </div>
          <div className="col-span-3 mb-9 content-center">
            <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
              🎓 Graduated from WSU in 2024 with a software engineering degree.
              🚀 Pursuing full-stack development, blending React and Node.js
              expertise. Also dabbles in Python, C, and C++. Passionate about
              crafting digital solutions that empower users! 💻🌟
            </p>
          </div>
          <div className="col-span-3 mb-9 content-center">
            <p className="bg-zinc-50 px-20 py-8 text-center text-xl text-zinc-700">
              Based in the Seattle area, I’m actively seeking a full-stack
              internship opportunity. Passionate about UI/UX design, database
              management, and all things tech. Experienced in API development
              and open to new challenges. Let’s connect and build something
              amazing! 🚀
            </p>
          </div>
          <div className="col-span-2 mb-9 content-center">
            <div className="m-auto w-fit rounded-xl bg-zinc-700 pb-2 pl-1">
              <img
                src="/me-seattle.JPG"
                alt="My graduation picture"
                className="mx-auto w-72 rounded-xl"
              ></img>
            </div>
          </div>
          <div className="border-3 col-span-2 border-black">t</div>
          <div className="border-3 col-span-3 border-black">t</div>
        </div>
      </div>
    </>
  );
}
