import React from 'react';
import { connect } from 'react-redux';
import { addStoreCompetency } from 'reducers/competencies';

const withCompetencies = (Component) => {

  const Competencies = (props) => {
    return <Component {...props} />;
  }

  const mapStateToProps = state => {
    const { competencies } = state;
    return competencies;
  }

  const mapDispatchToProps = dispatch => {
    return {
      addCompetency: () => dispatch(addStoreCompetency())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Competencies);

}

export default withCompetencies;
