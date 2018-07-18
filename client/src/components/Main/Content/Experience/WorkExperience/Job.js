import React, { Component } from 'react';
import moment from 'moment';
import { withUser, withContent } from 'hoc';
import { compose } from 'utils';
import JobForm from './JobForm';
import JobContent from './JobContent';
import JobActions from './JobActions';

class Job extends Component {

  state = {
    open: false
  };


  handleOnUpdate = item => this.props.onUpdateJob(this.props.id, item);
  handleOnSave = () => this.props.onSaveJob();
  handleOnCancel = () => this.props.onCancelEditJob();
  
  render() {

    const {
      job = {},
      id,
      isLoggedIn = false
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
        <JobContent
          job={job}
          company={company}
          dates={dates}
        />
        <JobActions 
          id={id}
          show={isLoggedIn} 
        />
        <JobForm
          id={id}
          job={job}
          open={isLoggedIn && isEditing}
          onUpdate={this.handleOnUpdate}
          onSave={this.handleOnSave}
          onCancel={this.handleOnCancel}
        />
      </div>
    );

  }
}

export default compose(
  withUser,
  withContent
)(Job);
