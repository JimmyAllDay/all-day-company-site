import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import ImageWithFallback from '@/components/imageWithFallback/ImageWithFallback';
import limitWords from '@/utils/helperFunctions';
import { items } from './data.js';

export const metadata = {
  title: 'All Day - Blog',
  description: 'Tales from the web.',
};

// async function getData() {
//   const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     console.error('fetch error');
//     return items.error;
//   }

//   return res.json();
// }

export default async function Blog() {
  // const data = await getData();
  const data = items.error;
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <Link
              href={`/blog/${item._id}`}
              key={item._id}
              className={styles.container}
            >
              <div className={styles.imageContainer}>
                <ImageWithFallback
                  src={item.image}
                  fill={true}
                  alt=""
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <p className={styles.text}>{limitWords(item.content, 30)}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
