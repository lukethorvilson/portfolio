import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="relative h-[100dvh] w-[100dvw]">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
