import React from 'react';
import Competencies from './components/Competencies';
import './styles.css';

const Layout = props => {

  return (
    <div className="root">
      <div className="main">
      </div>
      <div className="sidebar">
        <Competencies />
      </div>
    </div>
  );

}

export default Layout;
