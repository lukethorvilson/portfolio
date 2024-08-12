import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef, useState } from "react";

function AboutSection({ captionFirst, sectionNum, captionEl, contentEl }) {
  const [section, setSection] = useState(0);
  const sectionRef = useRef();
  const removeHidden = useCallback(
    (section) => {
      console.log(`${sectionNum}:${section}`);
      if (section <= 750) {
        sectionRef.current.classList.add("fadeIn");
      }
    },
    [sectionNum],
  );

  useEffect(
    function () {
      const handleScroll = debounce(() => {
        const bot = sectionRef.current.getBoundingClientRect().bottom
        setSection(bot);
        removeHidden(bot);
      }, 100);
      window.addEventListener("scroll", handleScroll);

      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [sectionNum, section, removeHidden],
  );

  if (captionFirst)
    return (
      <div ref={sectionRef} className="hide col-span-5 mb-9 mt-8 h-96 w-full">
        <div className="col-span-3">{captionEl}</div>
        <div className="col-span-2">{contentEl}</div>
      </div>
    );
  else
    return (
      <div ref={sectionRef} className="hide col-span-5 mb-9 mt-8 h-96 w-full">
        <div className="col-span-2">{contentEl}</div>
        <div className="col-span-3">{captionEl}</div>
      </div>
    );
}

export default AboutSection;
