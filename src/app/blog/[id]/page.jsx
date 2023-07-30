import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import testImage from '../../../../public/allDayNavLogo-White.png';

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Blog Entry Title</h1>
          <p className={styles.desc}>Blog entry description</p>
          <div className={styles.author}>
            <Image
              src=""
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={testImage} alt="" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Content</p>
      </div>
    </div>
  );
};

export default BlogPost;
