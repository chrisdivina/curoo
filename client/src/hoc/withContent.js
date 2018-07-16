import React from 'react';
import { connect } from 'react-redux';
import {
  editJob,
  updateJob,
  saveJob,
  cancelEditJob,
  deleteJob
} from 'reducers/work';

export default function withContent(WrappedComponent) {

  const Content = props => <WrappedComponent {...props} />

  const mapStateToProps = state => {
    const {
      content = {}
    } = state;
    const {
      isLoading = true,
      isUpdated = false,
      data = {}
    } = content;
    return {
      isLoading,
      isUpdated,
      data
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      onEditJob: id => dispatch(editJob(id)),
      onUpdateJob: (id, job) => dispatch(updateJob(id, job)),
      onSaveJob: id => dispatch(saveJob(id)),
      onCancelEditJob: () => dispatch(cancelEditJob()),
      onDeleteJob: id => dispatch(deleteJob(id))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Content);

}
