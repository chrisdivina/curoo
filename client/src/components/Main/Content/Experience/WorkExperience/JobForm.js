import React, { Component } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';

class JobForm extends Component {

  state = {
    open: false,
    id: null
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onOpenDialog = this.onOpenDialog.bind(this);
    this.onCloseDialog = this.onCloseDialog.bind(this);
    this.onConfirmDeletion = this.onConfirmDeletion.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    const {
      job = {},
      onUpdate
    } = this.props;

    onUpdate({ tasks: [
      ...job.tasks,
      ''
    ]});
  }

  onOpenDialog(e) {
    this.setState({
      open: true,
      id: e.currentTarget.getAttribute('data-id')
    });
  }

  onCloseDialog() {
    this.setState({ open: false });
  }

  onConfirmDeletion() {
    const {
      job = {},
      onUpdate
    } = this.props;
    onUpdate({ tasks: job.tasks.filter((task, index) => index !== parseInt(this.state.id, 10)) });
    this.onCloseDialog();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSave();
  }

  render() {

    const {
      job = {},
      onUpdate,
      onSave,
      onCancel,
      fullScreen
    } = this.props;

    return (
      <form
        onSubmit={onSave}
        onReset={onCancel}
      >
        <TextField
          id="title"
          label="Job Title"
          defaultValue={job.title}
          margin="normal"
          onChange={(e) => onUpdate({ title: e.target.value })}
        />
        <TextField
          id="organization"
          label="Company Name"
          defaultValue={job.organization}
          margin="normal"
          onChange={(e) => onUpdate({ organization: e.target.value })}
        />
        <TextField
          id="location"
          label="Location"
          defaultValue={job.location}
          margin="normal"
          onChange={(e) => onUpdate({ location: e.target.value })}
        />
        <TextField
          id="startDate"
          label="From"
          type="date"
          defaultValue={job.startDate}
          margin="normal"
          onChange={(e) => onUpdate({ startDate: e.target.value })}
        />
        <TextField
          id="endDate"
          label="Until"
          type="date"
          defaultValue={job.endDate}
          margin="normal"
          onChange={(e) => onUpdate({ endDate: e.target.value })}
        />
        <TextField
          id="url"
          label="Company URL"
          defaultValue={job.url}
          margin="normal"
          onChange={(e) => onUpdate({ url: e.target.value })}
        />
        <TextField
          id="decription"
          label="Job Description"
          value={job.description}
          margin="normal"
          multiline
          rows="4"
          onChange={(e) => onUpdate({ description: e.target.value })}
        />
        <h3>List of Tasks</h3>
        <ul>
          {job.tasks.map((task, taskId) => (
            <li>
              <TextField
                id={taskId}
                label={`Task #${taskId+1}`}
                value={task}
                margin="normal"
                fullWidth
                multiline
                onChange={(e) => onUpdate({ tasks: job.tasks.map((oldValue, index) => index === parseInt(e.target.id, 10) ? e.target.value : oldValue)} )}
              />
              <Button
                variant="contained"
                color="secondary"
                data-id={taskId}
                onClick={this.onOpenDialog}
                >
                Delete
              </Button>
            </li>
          ))}
          <li>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addTask}
              >
              Add Task
            </Button>
          </li>
        </ul>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!job.isUpdated}
        >
          Save
        </Button>
        <Button variant="contained" color="primary" type="reset">
          Cancel
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.onCloseDialog}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Deleting Task?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you would like to delete this task?
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
      </form>
    );
  }
}

export default withMobileDialog()(JobForm);
