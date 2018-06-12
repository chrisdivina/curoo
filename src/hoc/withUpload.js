import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadToServer } from 'reducers/payload';

export default function withUpload(WrappedComponent) {

  class UploadFile extends Component {

    render() {
      const { upload } = this.props;
      return <WrappedComponent upload={upload} />
    }

  }

  const mapStateToProps = state => {
    const { payload } = state;
    return { payload };
  }

  const mapDispatchToProps = dispatch => {
    return {
      upload: file => dispatch(uploadToServer(file))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(UploadFile);

}
