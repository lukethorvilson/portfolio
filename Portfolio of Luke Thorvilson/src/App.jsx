import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModeProvider } from "./contexts/ModeProvider";
import Logo from "./components/Logo";

function App() {
  return (
    <ModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Logo />} />
          {/* set up routes to pages here and layout */}
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </ModeProvider>
  );
}

export default App;
