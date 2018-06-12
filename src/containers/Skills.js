import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addSkill, deleteSkill } from '../reducers/skills';

class Skills extends Component {

  constructor() {
    super();
    this.state = {
      edit: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const fields = {
      name: this.form.name.value,
      level: this.form.level.value
    };
    this.props.addToSkills(fields);
  }

  render() {
    const {
      skills = [],
      deleteFromSkills
    } = this.props;

    return (
      <Fragment>
        { skills.map( skill => (
          <div key={skill.id}>
            <p>Name: {skill.name}</p>
            <p>Level: {skill.level}</p>
            <button onClick={() => deleteFromSkills(skill.id)}>Delete</button>
          </div>
        ))}

        <form ref={el => this.form = el}>
          <p>
            <label>Name</label>
            <input type="text" name="name" />
          </p>

          <p>
            <label>Level</label>
            <input type="number" name="level" />
          </p>
          <button onClick={this.handleClick}>Add Skill</button>
        </form>
      </Fragment>
    )
  }

}

const mapStateToProps = state => {
  const { skills = [] } = state;
  return { skills };
}

const mapDispatchToProps = dispatch => {
  return {
    addToSkills: fields => dispatch(addSkill(fields)),
    deleteFromSkills: id => dispatch(deleteSkill(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
