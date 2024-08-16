import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";
import useViewportWidth from "../hooks/useViewportWidth";

function NavBar() {
  const [viewportWidth] = useViewportWidth();

  console.log(viewportWidth);
  return (
    <div className="sticky top-0 z-10 flex h-24 w-full justify-between bg-zinc-700">
      <Link to="/">
        <Logo />
      </Link>
      {viewportWidth < 1024 && <NavMenu />}
      {viewportWidth >= 1024 && (
        <NavLinks className="my-auto mr-10 flex w-[40%] justify-between font-links text-xl tracking-wider text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "rounded-lg bg-zinc-600 px-3 py-2 transition-colors duration-500"
                : "px-3 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "rounded-lg bg-zinc-600 px-3 py-2 transition-colors duration-500"
                : "px-3 py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "rounded-lg bg-zinc-600 px-3 py-2 transition-colors duration-500"
                : "px-3 py-2"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "rounded-lg bg-zinc-600 px-3 py-2 transition-colors duration-500"
                : "px-3 py-2"
            }
          >
            Resume
          </NavLink>
        </NavLinks>
      )}
    </div>
  );
}

export default NavBar;
