'use client';
import React, { useState } from 'react';
import Button from '@/components/button/Button';
import styles from './contactForm.module.css';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [error, setError] = useState(false);

  const { mode } = useContext(ThemeContext);

  const buttonStyles = `${styles.button} ${
    mode === 'dark' ? styles.buttonDark : styles.buttonLight
  }`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    console.log(name, email, message);

    const res = await fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!res.ok) {
      setError(true);
    }

    setLoading(false);
    setFormSent(true);
  };

  if (error)
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          {`Uh oh, there's been a server error...`}
          <br />
          <br />
          {`Please try giving us a call instead.`}
        </div>
      </div>
    );

  if (formSent)
    return (
      <div className={styles.container}>
        <div className={styles.submitted}>
          {`Thanks. Well be in touch soon.`}
        </div>
      </div>
    );

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="name"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <textarea
          className={styles.textArea}
          placeholder="message"
          cols="30"
          rows="10"
          required
        />

        <div className={styles.buttonContainer}>
          <button className={buttonStyles}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
