'use client';
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export default function Footer() {
  const { mode } = useContext(ThemeContext);

  const logoThemeStyles = `${
    mode === 'dark' ? styles.socialDark : styles.social
  }`;

  return (
    <div className={styles.container}>
      <div className={styles.copyrightText}>
        <span className={styles.copyright}>©</span> All Day Web Projects 2023.
        All Rights Reserved.
      </div>
      <div className={logoThemeStyles}>
        <BiLogoFacebookSquare size="1.5em" />
        <BiLogoInstagramAlt size="1.5em" />
        <BiLogoTwitter size="1.5em" />
        <BiLogoYoutube size="1.5em" />
      </div>
    </div>
  );
}
