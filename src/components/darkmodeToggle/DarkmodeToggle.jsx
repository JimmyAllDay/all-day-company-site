import { useCallback, useContext, useState } from 'react';
import styles from './darkmodeToggle.module.css';
import { ThemeContext } from '../../../context/ThemeContext';

export default function DarkmodeToggle() {
  const { changeMode, mode } = useContext(ThemeContext);

  const switchStyles = `${styles.ball} ${
    mode === 'dark' ? styles.up : styles.down
  }`;

  return (
    <div className={styles.container} onClick={changeMode}>
      <div className={styles.icon}>🔆</div>
      <div className={styles.icon}>🌙</div>
      <div className={switchStyles} />
    </div>
  );
}
