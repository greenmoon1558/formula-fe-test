import React from "react";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        ® 2016 Dirty Dogs all rights reserved
      </div>
      <address className={styles.address}>
        <div className={styles.address__item}>
          274 Marconi Blvd. Columbus, Ohio 43215
        </div>
        <div className={styles.address__item}>614.538.0095</div>
        <div className={styles.address__item}>Contact Us</div>
      </address>
    </footer>
  );
}

export default Footer;
