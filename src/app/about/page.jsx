import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import ThemeMessageBox from '@/components/themeMessageBox/ThemeMessageBox';
import ImageWithFallback from '@/components/imageWithFallback/ImageWithFallback';

export const metadata = {
  title: 'All Day - About',
  description: 'We make... how do you say... various things.',
};

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <ImageWithFallback
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <ThemeMessageBox message="We are digital story tellers who craft award winning experiences" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Our work</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            <span className={styles.bullet}>
              {' '}
              - Enterprise Web Applications
            </span>
            <br />
            <br />
            <span className={styles.bullet}> - Mobile Applications</span>
            <br />
            <br />
            <span className={styles.bullet}> - Web3 and AI</span>
          </p>
          <div className={styles.buttonContainer}>
            <Button url="/contact" label="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
}
