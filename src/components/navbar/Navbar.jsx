'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import Button from '@/components/button/Button';
import DarkmodeToggle from '@/components/darkmodeToggle/DarkmodeToggle';
import { ThemeContext } from '../../../context/ThemeContext';
import { useContext } from 'react';

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
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

export default function Navbar() {
  const { mode } = useContext(ThemeContext);

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
        <Button label="Logout" func={() => console.log('clicked log out')} />
        <DarkmodeToggle />
      </div>
    </div>
  );
}
