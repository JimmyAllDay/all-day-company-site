'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import AuthButton from '@/components/authButton/AuthButton';
import DarkmodeToggle from '@/components/darkmodeToggle/DarkmodeToggle';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const links = [
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
];

export default function Navbar() {
  const { mode } = useContext(ThemeContext);
  const { user, error, isLoading } = useUser();

  const logoThemeStyles = `${styles.logoContainer} ${
    mode === 'dark' ? styles.darkTheme : styles.lightTheme
  }`;

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={logoThemeStyles}>
          <h1 className={styles.logo}>All Day</h1>
        </div>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {user && (
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        )}
        <AuthButton />
        <DarkmodeToggle />
      </div>
    </div>
  );
}
