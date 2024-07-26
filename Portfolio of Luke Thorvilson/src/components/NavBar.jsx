import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <div className="bg-zinc-700 sticky flex h-24 w-full justify-between py-[0.rem]">
      <Link to="/">
        <Logo />
      </Link>
      <NavLinks className="text-white my-auto mr-10 flex w-[40%] justify-between font-links tracking-wider text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          Resume
        </NavLink>
      </NavLinks>
    </div>
  );
}

export default NavBar;
