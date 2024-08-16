import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import useViewportWidth from "../hooks/useViewportWidth";

function ResumeContainer() {
  const [viewportWidth] = useViewportWidth();
  return (
    <div className="mx-auto my-10 sm:h-[800px] sm:w-[620px] md:h-[950px] md:w-[720px]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer key={viewportWidth} fileUrl="/luke_thorvilson_resume.pdf" />
      </Worker>
    </div>
  );
}

export default ResumeContainer;
