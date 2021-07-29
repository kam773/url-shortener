import * as React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Footer.module.css";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="Icon" width={150} height={40} />
        </div>
        <div className={styles.footerInner}>
          <div className="section-features">
            <h5 className={styles.headingSmall}>Features</h5>
            <ul className={styles.list}>
              <li>
                <a href="/short" className={styles.link}>
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="/brands" className={styles.link}>
                  Branded Links
                </a>
              </li>
              <li>
                <a href="/analytics" className={styles.link}>
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div className="section-resources">
            <h5 className={styles.headingSmall}>Resources</h5>
            <ul className={styles.list}>
              <li>
                <a href="/blog" className={styles.link}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/developers" className={styles.link}>
                  Developers
                </a>
              </li>
              <li>
                <a href="/support" className={styles.link}>
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="section-company">
            <h5 className={styles.headingSmall}>Company</h5>
            <ul className={styles.list}>
              <li>
                <a href="/about" className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a href="/team" className={styles.link}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className={styles.Link}>
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <ul className={`${styles.list} ${styles.flexList}`}>
            <li>
              <a href="/facebook" className={styles.link}>
                <img src="/assets/icon-facebook.svg" alt="" width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="/twitter" className={styles.link}>
                <img src="/assets/icon-twitter.svg" alt="" width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="/pinterest" className={styles.link}>
                <img src="/assets/icon-pinterest.svg" alt="" width={24} height={24} />
              </a>
            </li>
            <li>
              <a href="/instagram" className={styles.link}>
                <img src="/assets/icon-instagram.svg"alt="" width={24} height={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
