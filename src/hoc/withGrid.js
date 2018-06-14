import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateGapInState,
  addRowToState,
  addColumnToState
} from 'reducers/grid';

export default function withGrid(WrappedComponent) {

  class Grid extends Component {

    render() {
      return <WrappedComponent
        grid={this.props.grid}
        updateGap={this.props.updateGap}
        insertRow={this.props.insertRow}
        insertColumn={this.props.insertColumn}
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
      insertColumn: (width, name) => dispatch(addColumnToState(width, name))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Grid);

}
