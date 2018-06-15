import React, { Component } from 'react';
import { withCompetencies } from 'hoc';
import Form from './Form';

class Competencies extends Component {

  state = {
    create: false
  };

  constructor() {
    super();
    this.handleAddCompetency = this.handleAddCompetency.bind(this);
  }

  handleAddCompetency() {
    this.setState({create: true});
  }

  render() {

    const { create } = this.state;

    return (
      <div>
        {!create &&
          <button onClick={this.handleAddCompetency}>
            Add Competency
          </button>
        }
        {create && <Form />}
      </div>
    );
  }

}

export default withCompetencies(Competencies);
