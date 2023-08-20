'use client';
import React, { useContext } from 'react';
import styles from './themeMessageBox.module.css';
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeMessageBox({ message }) {
  const { mode } = useContext(ThemeContext);

  const themeStyles = `${styles.messageContainer} ${
    mode === 'dark' && styles.dark
  }`;

  return (
    <div className={themeStyles}>
      <h1>{message}</h1>
    </div>
  );
}
