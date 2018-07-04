import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

function withContent(WrappedComponent) {

  class Content extends Component {

    render() {
      <WrappedComponent {...this.props} />
    }

  }

  const mapStateToProps = state => {
    const {
      payload = {},
      content = {}
    } = state;
    const { isLoading = true } = payload
    return {
      isLoading,
      content
    };
  }

  return connect(mapStateToProps)(Content);

}
