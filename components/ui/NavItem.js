import Link from "next/link";
import styles from "./Navbar.module.css";
import classNames from "classnames";

function NavItem({ title, link, itemIndex, currentPath }) {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: link === currentPath,
      })}
    >
      <Link href={link}>
        <b>{itemIndex < 10 ? `0${itemIndex}` : itemIndex}</b> {title}
      </Link>
    </li>
  );
}

export default NavItem;
