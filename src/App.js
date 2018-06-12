import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as componentList from './components';
import Main from './components/Main';

class App extends Component {

  state = {
    component: null
  };

  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component) {
    this.setState({ component });
  }

  render() {

    const { components } = this.props;
    const { component } = this.state;
    const Element = component ? componentList[component.name] : null;

    return (
      <Main components={components} handleClick={this.selectComponent}>
        {Element && <Element />}
      </Main>
    );
  }
}

const mapStateToProps = state => {
  const { components = [] } = state;
  return { components };
}

export default connect(mapStateToProps)(App);
