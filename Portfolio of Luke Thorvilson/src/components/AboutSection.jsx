import { debounce } from "lodash-es";
import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./Header";

// responsiveness for fade in needs work, should be able to calculate this based on viewport height and object
function AboutSection({ title, sectionNum, captionEl, contentEl, noPicture }) {
  // tracks sections location from top of the window
  const [section, setSection] = useState(0);
  const sectionRef = useRef();

  // removes the hidden effect and fades in content when a certain point of the page is reached
  const removeHidden = useCallback(
    (section) => {
      if (section <= 450) {
        sectionRef.current.classList.add("fadeIn");
      }
    },
    [],
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
        console.log(`Section ${sectionNum}: ${top}`)
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
  return (
    <div ref={sectionRef} className="hide grid grid-cols-2 gap-4">
      <div className="col-span-2 mx-auto mb-9 w-[325px] skew-x-6 bg-zinc-700 p-8 sm:w-[550px] md:w-[650px] lg:w-[950px] xl:w-[1200px]">
        <Header className="col-span-2 mx-auto mb-6 w-fit bg-zinc-100 px-2 text-center font-header text-xl text-zinc-700 sm:text-3xl md:text-4xl lg:col-span-2 lg:text-5xl xl:text-7xl">
          {title}
        </Header>
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="mx-auto mb-2 lg:my-auto">
            <p className="bg-zinc-100 px-2 py-2 text-center text-sm text-zinc-700 sm:text-base md:text-lg lg:w-[450px] lg:text-2xl xl:w-[650px]">
              <div className="-skew-x-6">{captionEl}</div>
            </p>
          </div>

          {!noPicture && <div className="mx-auto lg:my-auto">
            <div className="mx-auto w-[150px] -skew-x-6 rounded-xl bg-zinc-300 pb-2 pr-1 sm:w-[200px] md:w-[300px] lg:w-[300px]">
              {contentEl}
            </div>
          </div>}
          {noPicture && contentEl}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
