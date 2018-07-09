import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../reducers/content';

const withApp = WrappedComponent => {

  const App = props => <WrappedComponent {...props} />

  const mapStateToProps = state => {
    const { app = {} } = state;
    const { isLoading = true } = app;
    return { isLoading };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onFetch: () => dispatch(fetchData())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(App);

};

export default withApp;
