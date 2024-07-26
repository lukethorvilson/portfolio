import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <div className="bg-gray-800 flex h-24 w-full justify-between py-[0.rem]">
      <Link to="/">
        <Logo />
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </NavLinks>
    </div>
  );
}

export default NavBar;
