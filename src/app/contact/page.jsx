import React from 'react';
import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Lama Dev Contact Information',
  description: 'This is Contact Page',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Drop us a <span className={styles.underline}>line</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}></div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          />
          <div className={styles.buttonContainer}>
            <Button url="#" label="Send message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
