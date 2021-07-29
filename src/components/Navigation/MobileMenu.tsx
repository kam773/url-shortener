import * as React from "react";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.css";

const MobileMenu = () => {
  // TODO: expressive variable naming -> isMobileMenuVisible
  // boolean values should always start with is or has
  const [show, setShow] = React.useState(false);
  const toggleNav = () => setShow((prev) => !prev);
  return (
    <nav data-cy="mobile-nav" className={styles.mobileNav}>
      <div className={styles.mobileWrapper}>
        <img data-cy="mobile-logo" src={logo} alt="" width={60} height={20} />
        <div
          data-cy="menu-toggle"
          className={styles.menuToggle}
          onClick={toggleNav}
        >
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <ul className={`${styles.mobileMenu} ${show ? styles.show : null}`}>
        <li data-cy="mobile-item" className={styles.mobileListItem}>
          <a className={styles.mobileLink} href="/features">
            Features
          </a>
        </li>
        <li data-cy="mobile-item" className={styles.mobileListItem}>
          <a className={styles.mobileLink} href="/pricing">
            Pricing
          </a>
        </li>
        <li data-cy="mobile-item" className={styles.mobileListItem}>
          <a className={styles.mobileLink} href="/resources">
            Resources
          </a>
        </li>
        <li className={styles.wrapSeparator}>
          <div className={styles.separator}></div>
        </li>
        <li data-cy="mobile-item" className={styles.mobileListItem}>
          <a className={styles.mobileLink} href="/login">
            Login
          </a>
        </li>
        <li data-cy="mobile-item">
          {" "}
          <Button className={styles.btnRound}>Sign up</Button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
