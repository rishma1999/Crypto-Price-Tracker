// src/components/Spinner.js
import React from 'react';
import styles from './Spinner.module.css'; // We'll create this CSS file next

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
