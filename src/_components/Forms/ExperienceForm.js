import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  formControl: {
    margin: theme.spacing.unit,
    alignItems: 'flex-start',
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 200,
    textAlign: 'left'
  },
});

class ExperienceForm extends Component {

  render() {

    const {
      classes,
      experienceName = 'Title',
      organisationName = 'Organisation',
      location = 'Location',
      organisationURL = 'Web Address',
      experienceStartDate = 'Start',
      experienceEndDate = 'End',
      experienceDescription = 'Description'
    } = this.props;

    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField
            id="experienceName"
            name="experience-name"
            type="text"
            label={experienceName}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="organisationName"
            name="organisation-name"
            type="text"
            label={organisationName}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            id="organisationLocation"
            name="organisation-location"
            type="text"
            label={location}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl} row>
          <TextField
            id="organisationURL"
            name="organisation-url"
            type="text"
            label={organisationURL}
          />
        </FormControl>
        <FormControl className={classes.formControl} row>
          <TextField
            id="experienceStartDate"
            name="experience-start-date"
            type="date"
            label={experienceStartDate}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl} row>
          <TextField
            id="experienceEndDate"
            name="experience-end-date"
            type="date"
            label={experienceEndDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl} row>
          <TextField
            id="experienceDescription"
            name="experience-description"
            multiline
            rows="4"
            defaultValue="Default Value"
            label={experienceDescription}
          />
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(ExperienceForm);
