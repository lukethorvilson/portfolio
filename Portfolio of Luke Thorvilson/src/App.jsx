import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

// lazy loading
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Layout = lazy(() => import("./pages/Layout"));
const Projects = lazy(() => import("./pages/Projects"));
const Resume = lazy(() => import("./pages/Resume"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Route>

          {/* set up routes to pages here and layout */}
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
