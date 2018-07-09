import React from 'react';
import withUser from 'hoc/withUser';
import DisplayMode from './DisplayMode';
import EditMode from './EditMode';
import styles from './styles.css';

const Main = ({ isLoggedIn = false }) => {

  return (
    <div className={styles.root}>
      { !isLoggedIn && <DisplayMode /> }
      { isLoggedIn && <EditMode />}
    </div>
  )
}

export default withUser(Main);
