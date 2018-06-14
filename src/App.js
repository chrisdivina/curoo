import React, { Fragment } from 'react';
import TopBar from './components/TopBar';
import AppContent from './components/AppContent';

const App = ({children}) => {
  return (
    <Fragment>
      <TopBar />
      <AppContent>
       {children}
      </AppContent>
    </Fragment>
  )
}

export default App;
