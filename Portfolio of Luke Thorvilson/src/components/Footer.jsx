import { Link } from "react-router-dom";

// https://react-icons.github.io/react-icons/
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHandshake } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bottom-0 h-48 w-full content-center bg-zinc-700">
      <p className="mb-7 text-center text-white">
        © Luke R. Thorvilson 2024. All rights reserved.
      </p>
      <div className="flex justify-center gap-5">
        <Link to="https://www.linkedin.com/in/luke-thorvilson-2ba470252/">
          <FaLinkedin className="h-10 w-10 text-white" />
        </Link>
        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=luke.thorvilson.work@gmail.com&su=SUBJECT&body=BODY">
          <IoIosMail className="h-10 w-10 text-white" />
        </Link>
        <Link to="https://x.com/MarinersNerd">
          <FaXTwitter className="h-10 w-10 text-white" />
        </Link>
        <Link to="https://wsu.joinhandshake.com/profiles/28954228">
          <SiHandshake className="h-10 w-10 text-white" />
        </Link>
        <Link to="https://github.com/lukethorvilson">
          <FaGithub className="h-10 w-10 text-white" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
