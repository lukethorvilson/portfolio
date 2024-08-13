import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef, useState } from "react";

function AboutSection({ captionFirst, sectionNum, captionEl, contentEl }) {
  // tracks sections location from top of the window
  const [section, setSection] = useState(0);
  const sectionRef = useRef();
  
  // removes the hidden effect and fades in content when a certain point of the page is reached
  const removeHidden = useCallback(
    (section) => {
      console.log(`${sectionNum}:${section}`);
      if (section <= 750) {
        sectionRef.current.classList.add("fadeIn");
      }
    },
    [sectionNum],
  );

  // tracks scrolling and changes state when scrolled
  useEffect(
    function () {
      // check if point is already reached
      if(sectionRef.current.getBoundingClientRect().bottom <= 750){
        sectionRef.current.classList.add("fadeIn");
      }

      const handleScroll = debounce(() => {
        const bot = sectionRef.current.getBoundingClientRect().bottom;
        setSection(bot);
        removeHidden(bot);
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
        <div className="flex justify-between gap-20 w-full h-full items-center">
          <div className="mx-12 items-center">{captionEl}</div>
          <div className="mx-12">{contentEl}</div>
        </div>
      </div>
    );
  else
    return (
      <div ref={sectionRef} className="hide col-span-5 mb-9 mt-8 h-96 w-full">
        <div className="flex justify-between gap-20 w-full h-full items-center">
          <div className="mx-12">{contentEl}</div>
          <div className="mx-12 items-center">{captionEl}</div>
        </div>
      </div>
    );
}

export default AboutSection;