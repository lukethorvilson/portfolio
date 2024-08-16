import { Worker } from "@react-pdf-viewer/core";
// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function ResumeContainer() {
  const styles = {
    xsm: {
      margin: "0 auto",
      width: "40svw !important",
      height: "100svh !important",
    },
  };
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer style={styles.xsm} fileUrl="/luke_thorvilson_resume.pdf" />
    </Worker>
  );
}

export default ResumeContainer;
