import React from 'react';
import { connect } from 'react-redux';

export default function withContent(WrappedComponent) {

  const Content = props => <WrappedComponent {...props} />

  const mapStateToProps = state => {
    const {
      content = {}
    } = state;
    const {
      isLoading = true,
      data = {}
    } = content;
    return {
      isLoading,
      data
    };
  }

  return connect(mapStateToProps)(Content);

}
