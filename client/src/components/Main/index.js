import React from 'react';
import Header from './Header';
import Experience from './Experience';
import styles from './styles.css';

console.log(styles);

const Main = ({data}) => {
  return (
    <div className={styles.root}>
      <Header
        name={data.name}
        title={data.title}
        summary={data.summary}
      />
      <Experience experience={data.experience} />
    </div>
  )
}

export default Main;
