import React, { Component } from 'react';
import moment from 'moment';
import { withUser, withContent } from 'hoc';
import { compose } from 'utils';
import {
  Snackbar,
  SnackbarContent,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';
import { 
  Delete,
  Edit,
  CheckCircle,
  Close
} from '@material-ui/icons';
import JobForm from './JobForm';

class Job extends Component {

  state = {
    open: false,
    success: false
  };

  onOpenDialog = () => {
    this.setState({ open: true });
  }

  onCloseDialog = () => {
    this.setState({ open: false });
  }

  onConfirmDeletion = () => {
    this.props.onDeleteJob(this.props.id);
    this.onCloseDialog();
  }
  
  handleOnUpdate = item => {
    this.props.onUpdateJob(this.props.id, item);
  }

  handleOnSave = () => {
    this.props.onSaveJob();
    this.setState({ success: true });
  }
  
  handleOnCancel = () => {
    this.props.onCancelEditJob();
  }
  
  handleOnEdit = () => {
    this.props.onEditJob(this.props.id);
  }
  
  handleOnCloseSnackbar = () => {
    this.setState({ success: false });
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

    return (
      <div>
        <h4>{job.title}</h4>
        <h5>{company} ({job.location}), {dates}</h5>
        {job.description && <p>{job.description}</p>}
        {job.tasks && job.tasks.length > 0 &&
          <ul>
            {job.tasks.map((task, i) => (
              <li key={`${job.title}_${job.organization}_task_${i}`}>{task}</li>
            ))}
          </ul>
        }
        {isLoggedIn &&
          <div>
            <IconButton  
              color="primary" 
              component="span"
              onClick={this.handleOnEdit}
            >
              <Edit />
            </IconButton>
            <IconButton 
              color="secondary" 
              onClick={this.onOpenDialog}
            >
              <Delete />
            </IconButton>
          </div>
        }
        <JobForm
          id={id}
          job={job}
          open={isEditing}
          onUpdate={this.handleOnUpdate}
          onSave={this.handleOnSave}
          onCancel={this.handleOnCancel}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.success}
          autoHideDuration={3000}
          onClose={this.handleOnCloseSnackbar}
        >
          <SnackbarContent
            message={
              <span>
                <CheckCircle />
                The job has been updated successfully
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={this.handleOnCloseSnackbar}
              >
                <Close />
              </IconButton>,
            ]}
          />
        </Snackbar>
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
            <Button onClick={this.onConfirmDeletion} color="secondary">
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
