import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
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

class SkillForm extends Component {

  state ={
    level: 0
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    const {
      classes,
      values = ['None', 'Beginner', 'Intermediate', 'Expert'],
      skillName ='Skill Name'
    } = this.props;

    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <TextField
            id="skillName"
            name="skill-name"
            type="text"
            label={skillName}
            required
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="skill-level">Level of Knowledge</InputLabel>
          <Select
            value={this.state.level}
            inputProps={{
              name: 'level',
              id: 'skill-level'
            }}
            onChange={this.handleChange}
            className={classes.selectEmpty}
          >
            { values.map((label, value) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
        </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            size="small"
            color="primary"
            onClick={this.save}
          >Save</Button>
        </FormControl>
      </form>
    )
  }

}

export default withStyles(styles)(SkillForm);
