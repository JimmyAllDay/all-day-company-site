import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import testImage from '../../../public/allDayNavLogo-White.png';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
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
            <Link href={`/blog/${item.id}`} key={item.id}>
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
