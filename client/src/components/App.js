import React, { Fragment, Component } from 'react';
import withApp from 'hoc/withApp';
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
        { !this.props.isLoading && <Main /> }
      </Fragment>
    );
  }
}

export default withApp(App);
