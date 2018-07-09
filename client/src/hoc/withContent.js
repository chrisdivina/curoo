import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../reducers/content';

export default function withContent(WrappedComponent) {

  class Content extends PureComponent {

    render() {
      return <WrappedComponent {...this.props} />;
    }

  }

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

  const mapDispatchToProps = dispatch => {
    return {
      onFetch: () => dispatch(fetchData())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Content);

}
