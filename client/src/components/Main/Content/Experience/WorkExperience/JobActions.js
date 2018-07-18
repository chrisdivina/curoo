import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { withContent } from 'hoc';
import ConfirmDeletion from './ConfirmDeletion';

class JobActions extends Component {
  
  state = { open: false };
  toggleDialog = () => this.setState({ open: !this.state.open })
  editJob = () => this.props.onEditJob(this.props.id);
  onConfirm = () => {
    this.props.onDeleteJob(this.props.id);
    this.toggleDialog();
  }
  
  render() {
    
    if (!this.props.show) return null;
    
    return (
      <div>
        <IconButton  
          color="primary" 
          component="span"
          onClick={this.editJob}
        >
          <Edit />
        </IconButton>
        <IconButton 
          color="secondary" 
          onClick={this.toggleDialog}
        >
          <Delete />
        </IconButton>
        <ConfirmDeletion
          show={this.state.open}
          onClose={this.toggleDialog}
          onConfirm={this.onConfirm}
        />
      </div>
    )
  }
}

export default withContent(JobActions);