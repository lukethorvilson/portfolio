import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModeProvider } from "./contexts/ModeContext";
import About from "./pages/About";
import Homepage from "./pages/Hompage";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <ModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume/>} />
          </Route>

          {/* set up routes to pages here and layout */}
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </ModeProvider>
  );
}

export default App;
