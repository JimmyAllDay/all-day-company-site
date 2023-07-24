import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';

export default function Button({ label, url }) {
  return (
    <Link href={url}>
      <button className={styles.button}>{label}</button>
    </Link>
  );
}
