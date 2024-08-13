import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "./Navbar.module.css";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Navbar() {
  return (
    <nav className={cx("navbar-wrapper")}>
      <Image
        className={cx("logo-icon")}
        src="/su-tech.svg"
        width={130}
        height={43}
        alt="logo"
      />
      <MagnifyingGlassIcon className={cx("search-icon")} title="search" />
    </nav>
  );
}

export default Navbar;
