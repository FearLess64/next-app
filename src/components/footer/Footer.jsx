import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>@all rights reserved</div>
      <div className={styles.socialNetworks}>
        <a href="https://www.facebook.com" target="_blank">
          <Image className={styles.icon} src="/1.png" width={15} height={15} alt="facebook"/>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <Image className={styles.icon} src="/2.png" width={15} height={15} alt="instagram"/>
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <Image className={styles.icon} src="/3.png" width={15} height={15} alt="twitter"/>
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <Image className={styles.icon} src="/4.png" width={15} height={15} alt="youtube"/>
        </a>
      </div>
    </div>
  );
}

export default Footer;
