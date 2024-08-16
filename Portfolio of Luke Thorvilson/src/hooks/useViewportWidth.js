import { useEffect, useState } from "react";

function useViewportWidth() {
  const [viewportWidth, setViewPortWidth] = useState(0);

  useEffect(function () {
    function getResizedWidth() {
      setViewPortWidth(
        Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0,
        ),
      );
    }
    getResizedWidth();
    window.addEventListener("resize", getResizedWidth);
    return function () {
      window.removeEventListener("resize", getResizedWidth);
    };
  }, []);
  return [viewportWidth];
}

export default useViewportWidth;
