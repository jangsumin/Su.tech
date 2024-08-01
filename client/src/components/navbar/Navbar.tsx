import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <Image
        className="logo-icon"
        src="/su-tech.svg"
        width={130}
        height={43}
        alt="logo"
      />
      <MagnifyingGlassIcon className="search-icon" />
    </nav>
  );
}

export default Navbar;
