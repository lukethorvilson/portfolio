import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import NavMenuDropdown from "./NavMenuDropdown";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <HiOutlineMenu
          onClick={() => setIsOpen(true)}
          className="mx-10 my-6 h-10 w-10 cursor-pointer text-zinc-100"
        />
      ) : (
        <IoMdClose
          onClick={() => setIsOpen(false)}
          className="mx-10 my-6 h-10 w-10 cursor-pointer text-zinc-100"
        />
      )}
      <NavMenuDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default NavMenu;
