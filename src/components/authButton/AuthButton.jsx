'use client';
import React from 'react';
import Link from 'next/link';
import styles from './authButton.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Button() {
  const { user } = useUser();
  const { mode } = useContext(ThemeContext);

  const buttonThemeStyles = `${
    mode === 'dark' ? styles.buttonDark : styles.buttonLight
  }`;
  if (user) {
    return (
      <a href="api/auth/logout">
        <button className={buttonThemeStyles}>Logout</button>
      </a>
    );
  } else {
    return (
      <a href="api/auth/login">
        <button className={buttonThemeStyles}>Login</button>
      </a>
    );
  }
}
