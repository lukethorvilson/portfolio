import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef, useState } from "react";

// responsiveness for fade in needs work, should be able to calculate this based on viewport height and object
function AboutSection({ captionFirst, sectionNum, captionEl, contentEl }) {
  // tracks sections location from top of the window
  const [section, setSection] = useState(0);
  const sectionRef = useRef();

  // removes the hidden effect and fades in content when a certain point of the page is reached
  const removeHidden = useCallback(
    (section) => {
      console.log(`${sectionNum}:${section}`);
      if (section <= 900) {
        sectionRef.current.classList.add("fadeIn");
      }
    },
    [sectionNum],
  );

  // tracks scrolling and changes state when scrolled
  useEffect(
    function () {
      // check if point is already reached
      if (sectionRef.current.getBoundingClientRect().bottom <= 900) {
        sectionRef.current.classList.add("fadeIn");
      }

      const handleScroll = debounce(() => {
        const top = sectionRef.current.getBoundingClientRect().top;
        setSection(top);
        removeHidden(top);
      }, 100);
      window.addEventListener("scroll", handleScroll);

      // cleanup
      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [sectionNum, section, removeHidden],
  );

  // switches content and caption based on boolean prop
  if (captionFirst)
    return (
      <div ref={sectionRef} className="hide col-span-5 mb-9 mt-8 h-96 w-full">
        <div className="flex h-full w-full items-center justify-between gap-20">
          <div className="mx-12 items-center">{captionEl}</div>
          <div className="mx-32">{contentEl}</div>
        </div>
      </div>
    );
  else
    return (
      <div ref={sectionRef} className="hide col-span-5 mb-9 mt-8 h-96 w-full">
        <div className="flex h-full w-full items-center justify-between gap-20">
          <div className="mx-32">{contentEl}</div>
          <div className="mx-12 items-center">{captionEl}</div>
        </div>
      </div>
    );
}

export default AboutSection;
