import React from 'react';
import styles from './page.module.css';
import ImageWithFallback from '@/components/imageWithFallback/ImageWithFallback';
import { notFound } from 'next/navigation';
import testImage from '../../../../public/allDayNavLogo-White.png';
import { items } from './../data';

// async function getData(id) {
//   const res = await fetch(`${process.env.BASE_URL}/api/posts/${id}`, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// }

const BlogPost = async ({ params }) => {
  // const data = await getData(params.id);
  const data = items.error;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <ImageWithFallback
              src={data.image}
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <ImageWithFallback
            src={data.image}
            alt=""
            width={350}
            height={350}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
