import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import progroundLogo from '../../../../public/proground-logo.png';
import { items } from './data.js';
import { notFound } from 'next/navigation';

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

function capitalise(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Category({ params }) {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>
        {capitalise(params.category) === 'Web3'
          ? `${capitalise(params.category) + ' & AI Applications'}`
          : `${capitalise(params.category) + ' Applications'}`}
      </h1>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.desc}</p>
              <Button label="See more" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={item.image}
                fill={true}
                className={styles.img}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
