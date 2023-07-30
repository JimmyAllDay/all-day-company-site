import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import progroundLogo from '../../../../public/proground-logo.png';

export default function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{`${params.category} applications`}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>description</p>
          <Button label="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={progroundLogo}
            width={400}
            height={300}
            className={styles.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
