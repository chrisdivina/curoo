import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import styles from './styles.css';

const Main = () => {

  return (
    <div className={styles.root}>
      <Navigation />
      <Content />
    </div>
  )
}

export default Main;
