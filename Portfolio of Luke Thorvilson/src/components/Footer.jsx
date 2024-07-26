import { Link } from "react-router-dom";

// https://react-icons.github.io/react-icons/
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHandshake } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-zinc-700 bottom-0 h-48 w-full content-center">
      <p className="text-white mb-7 text-center">
        © Luke R. Thorvilson 2024. All rights reserved.
      </p>
      <div className="flex justify-center gap-5">
        <Link to="https://www.linkedin.com/in/luke-thorvilson-2ba470252/">
          <FaLinkedin className="text-white h-10 w-10" />
        </Link>
        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=luke.thorvilson.work@gmail.com&su=SUBJECT&body=BODY">
          <IoIosMail className="text-white h-10 w-10" />
        </Link>
        <Link to="https://x.com/MarinersNerd">
          <FaXTwitter className="text-white h-10 w-10" />
        </Link>
        <Link>
            <SiHandshake className="text-white h-10 w-10"/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
