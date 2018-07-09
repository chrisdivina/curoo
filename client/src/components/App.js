import React, { Fragment, Component } from 'react';
import withContent from '../hoc/withContent';
import Main from './Main';
import Preloader from './Preloader';

class App extends Component {

  componentDidMount() {
    const { onFetch } = this.props;

    if (process.env.NODE_ENV !== 'production') {
      setTimeout(onFetch, 1000);
    } else {
      onFetch();
    }
  }

  render() {
    return (
      <Fragment>
        { this.props.isLoading && <Preloader /> }
        { !this.props.isLoading && <Main data={this.props.data}/> }
      </Fragment>
    );
  }
}

export default withContent(App);
