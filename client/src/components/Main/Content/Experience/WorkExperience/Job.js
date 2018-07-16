import React, { Component } from 'react';
import moment from 'moment';
import { withUser, withContent } from 'hoc';
import { compose } from 'utils';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';
import JobForm from './JobForm';

class Job extends Component {

  state = {
    open: false
  };

  constructor() {
    super();
    this.onOpenDialog = this.onOpenDialog.bind(this);
    this.onCloseDialog = this.onCloseDialog.bind(this);
  }

  onOpenDialog() {
    this.setState({ open: true });
  }

  onCloseDialog() {
    this.setState({ open: false });
  }

  onConfirmDeletion(id) {
    this.props.onDeleteJob(id);
    this.onCloseDialog();
  }

  render() {

    const {
      job = {},
      id,
      isLoggedIn = false,
      onEditJob,
      onSaveJob,
      onCancelEditJob,
      onUpdateJob,
      fullScreen
    } = this.props;

    const {
      endDate = '',
      startDate,
      url,
      isEditing = false
    } = job;

    const dates = endDate && endDate.length > 0 ? `${moment(startDate).format('MMM YYYY')} - ${moment(endDate).format('MMM YYYY')}` : `Since ${moment(startDate).format('MMM YYYY')}`;
    const company = url && url.length > 0 ? <a href={url}>{job.organization}</a> : job.organization;

    if (isEditing) {
      return <JobForm
        id={id}
        job={job}
        onUpdate={item => onUpdateJob(id, item)}
        onSave={() => onSaveJob()}
        onCancel={() => onCancelEditJob()}
      />
    }

    return (
      <div>
        <h4>{job.title}</h4>
        <h5>{company} ({job.location}), {dates}</h5>
        {job.description && <p>{job.description}</p>}
        {job.tasks && job.tasks.length > 0 &&
          <ul>
            {job.tasks.map(task => (
              <li>{task}</li>
            ))}
          </ul>
        }
        {isLoggedIn &&
          <div>
            <span onClick={() => onEditJob(id)}>Edit</span>
            <span onClick={this.onOpenDialog}>Delete</span>
          </div>
        }
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.onCloseDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Deleting job?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you would like to delete this job?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCloseDialog} color="primary" autoFocus>
              Cancel
            </Button>
            <Button onClick={() => this.onConfirmDeletion(id)} color="secondary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );

  }
}

export default withMobileDialog()(compose(
  withUser,
  withContent
)(Job));
