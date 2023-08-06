import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import testImage from '../../../public/allDayNavLogo-White.png';

export const metadata = {
  title: 'All Day - Blog',
  description: 'Tales from the web.',
};

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  return (
    console.log(data),
    (
      <div>
        {data.map((item) => {
          return (
            <Link href={`/blog/${item._id}`} key={item._id}>
              <div className={styles.container}>
                <div className={styles.imageContainer}>
                  <Image
                    src={testImage}
                    width={370}
                    height={370}
                    alt=""
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.title}>{item.title}</h1>
                  <p className={styles.desc}>{item.body}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    )
  );
}
