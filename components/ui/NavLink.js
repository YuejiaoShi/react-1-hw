import Link from "next/link";
import styles from "./Navbar.module.css";
import classNames from "classnames";

function NavLink({ title, link, itemIndex, isActive }) {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{itemIndex < 10 ? `0${itemIndex}` : itemIndex}</b> {title}
      </Link>
    </li>
  );
}

export default NavLink;
