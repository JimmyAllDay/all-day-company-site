import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import ImageWithFallback from '@/components/imageWithFallback/ImageWithFallback';
import limitWords from '@/utils/helperFunctions';
import { items } from '../../utils/data.js';

export const metadata = {
  title: 'All Day - Blog',
  description: 'Tales from the web.',
};

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    const errorText = await res.text();
    return console.error(errorText);
  }

  const jsonData = await res.json();
  console.log('Response from API: ', jsonData);
  return jsonData;
}

export default async function Blog() {
  const data = await getData();
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
