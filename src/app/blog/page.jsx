import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import testImage from '../../../public/allDayNavLogo-White.png';

export default function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/blog/testid`} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={testImage}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test Title</h1>
          <p className={styles.desc}>Test description</p>
        </div>
      </Link>
    </div>
  );
}
