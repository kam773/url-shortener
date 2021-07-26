import * as React from "react";
import Button from "../Button/Button";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/logo.svg";
import styles from "./Navigation.module.css";

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <React.Fragment>
      <nav data-cy="nav" className={styles.navigation}>
        <ul className={styles.menu}>
          <li data-cy="logo" className={styles.logo}>
            <img src={logo} alt="Icon" width={150} height={40} />
          </li>
          <li data-cy="nav-item" className={styles.menuLink}>
            <a className={styles.link} href="/feature">
              Features
            </a>
          </li>
          <li data-cy="nav-item" className={styles.menuLink}>
            <a className={styles.link} href="/pricing">
              Pricing
            </a>
          </li>
          <li data-cy="nav-item" className={styles.menuLink}>
            <a className={styles.link} href="/resources">
              Resources
            </a>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li data-cy="nav-item" className={styles.menuLink}>
            <a className={styles.link} href="/login">
              Login
            </a>
          </li>
          <li data-cy="nav-item" className={styles.menuLink}>
            <Button className={styles.btnRound}>Sign up</Button>
          </li>
        </ul>
      </nav>
      <MobileMenu />
    </React.Fragment>
  );
};

export default Navigation;
