import * as React from "react";
import Illustration from "../../assets/illustration-working.svg";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.headerContent}>
        <div className={styles.containerText}>
          <h1 data-cy="heading" className={styles.headingPrimary}>
            More than just shorter links
          </h1>
          <p className={styles.headerText}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="cta">
            <Button className={styles.ctaBtn}>Get started</Button>
          </div>
        </div>
        <div className={styles.containerImage}>
          <img
            data-cy="banner"
            src={Illustration}
            alt=""
            width={800}
            height={600}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
