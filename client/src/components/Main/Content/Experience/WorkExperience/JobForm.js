import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Slide,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

import { Close } from '@material-ui/icons';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class JobForm extends Component {

  state = {
    open: false,
    id: null
  };

  addTask = () => {
    const {
      job = {},
      onUpdate
    } = this.props;

    onUpdate({ tasks: [
      ...job.tasks,
      ''
    ]});
  }

  onOpenDialog = e => {
    this.setState({
      open: true,
      id: e.currentTarget.getAttribute('data-id')
    });
  }

  onCloseDialog = () => {
    this.setState({ open: false });
  }

  onConfirmDeletion = () => {
    const {
      job = {},
      onUpdate
    } = this.props;
    onUpdate({ tasks: job.tasks.filter((task, index) => index !== parseInt(this.state.id, 10)) });
    this.onCloseDialog();
  }
  
  handleOnTaskChange = e => {
    this.props.onUpdate({ 
      tasks: this.props.job.tasks.map((oldValue, index) => index === parseInt(e.target.id, 10) ? e.target.value : oldValue)
    });
  }
  
  handleOnChange = e => {
    console.log(this.props);
    this.props.onUpdate({
      [e.target.id]: e.target.value
    });
  }
  
  handleOnCancel = () => {
    this.props.onCancel();
  }
  
  handleOnSave = () => {
    this.props.onSave();
  }

  render() {

    const {
      job = {},
      open
    } = this.props;

    return (
      <Dialog
        fullScreen
        open={open}
        onClose={this.handleOnCancel}
        TransitionComponent={Transition}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={this.handleOnCancel} aria-label="Close">
              <Close />
            </IconButton>
            <Typography variant="title" color="inherit">
              Edit Job
            </Typography>
            <Button color="inherit" disabled={!job.isUpdated} onClick={this.handleOnSave}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <TextField
            id="title"
            label="Job Title"
            defaultValue={job.title}
            margin="normal"
            onChange={this.handleOnChange}
          />
          <TextField
            id="organization"
            label="Company Name"
            defaultValue={job.organization}
            margin="normal"
            onChange={this.handleOnChange}
          />
          <TextField
            id="location"
            label="Location"
            defaultValue={job.location}
            margin="normal"
            onChange={this.handleOnChange}
          />
          <TextField
            id="startDate"
            label="From"
            type="date"
            defaultValue={job.startDate}
            margin="normal"
            onChange={this.handleOnChange}
          />
          <TextField
            id="endDate"
            label="Until"
            type="date"
            defaultValue={job.endDate}
            margin="normal"
            onChange={this.handleOnChange}
          />
          <TextField
            id="url"
            label="Company URL"
            defaultValue={job.url}
            margin="normal"
            onChange={this.handleOnChange}
          />
          <TextField
            id="description"
            label="Job Description"
            defaultValue={job.description}
            margin="normal"
            multiline
            rows="4"
            onChange={this.handleOnChange}
          />
          <h3>List of Tasks</h3>
          <ul>
            {job.tasks.map((task, taskId) => (
              <li key={`${job.title}_${job.organization}_editTask_${taskId}`}>
                <TextField
                  id={`${taskId}`}
                  label={`Task #${taskId+1}`}
                  value={task}
                  margin="normal"
                  fullWidth
                  multiline
                  onChange={this.handleOnTaskChange}
                />
                <Button
                  variant="flat"
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
                variant="flat"
                color="primary"
                onClick={this.addTask}
                >
                Add Task
              </Button>
            </li>
          </ul>
          </DialogContent>
          <Dialog
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
        </Dialog>
      
    );
  }
}

export default JobForm;
