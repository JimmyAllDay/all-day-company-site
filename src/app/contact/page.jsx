import Image from 'next/image';
import Button from '@/components/button/Button';
import styles from './page.module.css';
import ContactForm from '@/components/contactForm/ContactForm';

export const metadata = {
  title: 'All Day - Contact',
  description:
    'Launch tiny fragments of information through the sky direct to our computers.',
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Drop us a <span className={styles.underline}>line</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.jpg"
            alt=""
            fill={true}
            className={styles.image}
            priority
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
