// import { useRef } from "react";
import { NavLink } from "react-router-dom";

function NavMenuDropdown({ isOpen, setIsOpen }) {
  // add feature where if clicked outside the menu then close
  //   const navMenuEl = useRef();
  return (
    <ul
      //   ref={navMenuEl}
      className={`absolute bottom-[-12rem] right-0 block h-0 rounded-md bg-zinc-700 pl-10 text-lg transition-transform duration-1000 ${isOpen ? "h-auto translate-y-0 opacity-100" : "h-0 translate-y-[-100%] opacity-0"}`}
    >
      <li className="mb-[10px] mt-[10px] pr-20 text-zinc-100">
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
      </li>
      <hr className="mr-4 rounded-lg border-[1.5px] opacity-65" />
      <li className="mb-[10px] mt-[10px] pr-20 text-zinc-100">
        <NavLink to="/About" onClick={() => setIsOpen(false)}>About</NavLink>
      </li>
      <hr className="mr-4 rounded-lg border-[1.5px] opacity-65" />
      <li className="mb-[10px] mt-[10px] pr-20 text-zinc-100">
        <NavLink to="Projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
      </li>
      <hr className="mr-4 rounded-lg border-[1.5px] opacity-65" />
      <li className="mb-[10px] mt-[10px] pr-20 text-zinc-100">
        <NavLink to="/Resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
      </li>
    </ul>
  );
}

export default NavMenuDropdown;
