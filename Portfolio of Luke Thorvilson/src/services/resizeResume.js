export default function resizeResume(viewportWidth) {
  const resumeStyles = {
    xsm: {
      width: "500px !important",
      height: "750px !important",
    },
    sm: {
      margin: "0 auto !important",
      width: "620px !important",
      height: "800px !important",
    },
    md: {
      width: "720px !important",
      height: "950px !important",
    },
    lg: {
      width: "1000px !important",
      height: "1250px !important",
    },
  };
  if (viewportWidth < 640) return resumeStyles.xsm;
  if (viewportWidth >= 640 && viewportWidth < 768) return resumeStyles.sm;
  if (viewportWidth >= 768 && viewportWidth < 1024) return resumeStyles.md;
  if (viewportWidth >= 1024) return resumeStyles.lg;
}
