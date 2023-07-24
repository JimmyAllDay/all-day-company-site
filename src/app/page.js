import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.linkContainer}>
          <Link href={'/portfolio'} className={styles.link}>
            Our Projects
          </Link>
        </div>
      </div>
      <div className={styles.item2}>
        <div className={styles.title}>Design Develop Deploy</div>
      </div>
    </div>
  );
}
