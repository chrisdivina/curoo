import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function withGrid(WrappedComponent) {

  class Grid extends Component {

    render() {
      return <WrappedComponent ...this.props />;
    }

  }

  const mapStateToProps = state => {
    const { grid = {} } = state;
    const { styles = {} } = grid;
    return { styles };
  }

  return connect()(Grid);
}
