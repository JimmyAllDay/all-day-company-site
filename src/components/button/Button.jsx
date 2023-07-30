'use client';
import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';
import { ThemeContext } from '../../../context/ThemeContext';
import { useContext } from 'react';

export default function Button({ label, url, func }) {
  const { mode } = useContext(ThemeContext);

  const buttonThemeStyles = `${
    mode === 'dark' ? styles.buttonDark : styles.buttonLight
  }`;

  if (url && func) {
    throw new Error(
      'Button component should only be used as either a link or to call a function. Remove either the url or func props.'
    );
    return;
  }
  if (url) {
    return (
      <Link href={url}>
        <button className={buttonThemeStyles}>{label}</button>
      </Link>
    );
  }
  if (func) {
    return (
      <button onClick={func} className={buttonThemeStyles}>
        {label}
      </button>
    );
  }
}
