import React, { Component } from 'react';
import {
  TextField,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  Reorder as ReorderIcon,
  Save as SaveIcon
} from '@material-ui/icons';
import { withCompetencies } from 'hoc';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Form extends Component {

  state = {
    levels: ['Beginner', 'Intermediate']
  }

  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleAdd() {
    const { levels = [] } = this.state;
    levels.push('');
    this.setState({ levels });
  }

  handleDelete(level) {
    const { levels = [] } = this.state;
    this.setState({
      levels: levels.filter(value => value !== level)
    });
  }

  handleSave() {
    const formData = new FormData(this.form);
    const title = formData.get('title');
    const { levels = [] } = this.state;
    const params = {
      title,
      levels
    }
    this.props.addCompetency(params);
  }

  render() {

    const { levels = [] } = this.state;

    return (
      <form ref={el => this.form = el}>
        <Typography variant="headline">
          New Skill
        </Typography>
        <TextField
          label="Skill Name"
          name="title"
          margin="normal"
        />
        <Typography variant="subheading" gutterBottom>
          Levels
        </Typography>
        { levels.map((level, index) => (
          <div key={index}>
            <IconButton>
              <ReorderIcon />
            </IconButton>
            <TextField
              label={`Level ${index}`}
              margin="normal"
              defaultValue={level}
            />
            <IconButton
              onClick={() => this.handleDelete(level)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <Button onClick={this.handleAdd}>
          Add Level
        </Button>
        <div>
          <Button
            variant="raised"
            onClick={this.handleSave}
          >
            <SaveIcon />
            Save
          </Button>
          <Button>Cancel</Button>
        </div>
      </form>
    );
  }

}

export default withCompetencies(Form);
