import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateGapInState,
  addRowToState,
  addColumnToState,
  removeColumnFromState,
  removeRowFromState
} from 'reducers/grid';

export default function withGrid(WrappedComponent) {

  class Grid extends Component {

    render() {
      return <WrappedComponent
        {...this.props}
      />;
    }

  }

  const mapStateToProps = state => {
    const { grid = {} } = state;
    return { grid };
  }

  const mapDispatchToProps = dispatch => {
    return {
      updateGap: settings => dispatch(updateGapInState(settings)),
      insertRow: (height, name) => dispatch(addRowToState(height, name)),
      insertColumn: (width, name) => dispatch(addColumnToState(width, name)),
      removeColumn: id => dispatch(removeColumnFromState(id)),
      removeRow: id => dispatch(removeRowFromState(id))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Grid);

}
