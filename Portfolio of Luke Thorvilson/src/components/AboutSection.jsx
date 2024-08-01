import { useEffect, useState } from "react";

function AboutSection({ captionFirst, sectionNum, captionEl, contentEl }) {
  const [section, setSection] = useState(0);
  useEffect(
    function () {
      const id = window.addEventListener("scroll", () => {
        setSection(
          document
            .querySelector(`#section${sectionNum}`)
            .getBoundingClientRect().bottom,
        );
      });
      return function () {
        window.removeEventListener("scroll", id);
      };
    },
    [sectionNum],
  );

  console.log(`Section${sectionNum}: ${section}`);
  // <div className={`col-span-${cols} h-96 w-[90vw]`}>
  if (captionFirst)
    return (
      <>
        <div className="col-span-3 mb-9 content-center">{captionEl}</div>
        <div id={`section${sectionNum}`} className="col-span-2 mb-9 mt-8">
          {contentEl}
        </div>
      </>
    );
  else
    return (
      <>
        <div id={`section${sectionNum}`} className="col-span-2 mb-9 mt-8">
          {contentEl}
        </div>
        <div className="col-span-3 mb-9 content-center">{captionEl}</div>
      </>
    );
  // </div>
}

export default AboutSection;
