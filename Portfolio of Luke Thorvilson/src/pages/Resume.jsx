import ResumeContainer from "../components/ResumeContainer";

function Resume() {
  return (
    <>
      <div className="relative mx-auto mt-7 h-[50px] w-[620px] md:w-[720px]">
        <a href="/luke_thorvilson_resume.pdf" download="Luke_Thorvilson_Resume">
          <button className="absolute bottom-0 left-12 rounded-md bg-zinc-700 px-2 py-2 text-zinc-100 sm:left-12 sm:px-3 sm:text-lg md:left-10 md:px-4 md:text-xl">
            Download
          </button>
        </a>
      </div>
      <ResumeContainer />;
    </>
  );
}

export default Resume;
