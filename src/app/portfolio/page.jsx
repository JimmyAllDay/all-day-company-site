import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Select a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/enterprise" className={styles.item}>
          <span className={styles.title}>
            Enterprise <br />
            Web <br /> Applications
          </span>
        </Link>
        <Link href="/portfolio/web3" className={styles.item}>
          <span className={styles.title}>
            Web3 <br />
            and <br /> AI
          </span>
        </Link>
        <Link href="/portfolio/mobile" className={styles.item}>
          <span className={styles.title}>Mobile Applications</span>
        </Link>
      </div>
    </div>
  );
}
