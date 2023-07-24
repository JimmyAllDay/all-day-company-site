import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyrightText}>
        <span className={styles.copyright}>©</span> All Day Web Projects 2023.
        All Rights Reserved.
      </div>
      <div className={styles.social}>
        <BiLogoFacebookSquare size="1.5em" color="#c1ff70" />
        <BiLogoInstagramAlt size="1.5em" color="#c1ff70" />
        <BiLogoTwitter size="1.5em" color="#c1ff70" />
        <BiLogoYoutube size="1.5em" color="#c1ff70" />
      </div>
    </div>
  );
}
