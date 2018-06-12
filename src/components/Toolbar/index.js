import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import styles from './styles'

class Toolbar extends Component {

  constructor() {
    super();
    this.state = {
      isDragging: false,
      component: null
    }
  }

  handleDrag(widget) {
    const { component = null } = widget;
    this.setState({
      component,
      isDragging: true
    });
  }

  handleDragEnd() {
    const { onDragged = null } = this.props;
    const { component } = this.state;
    if (typeof onDragged === 'function' && component) {
      onDragged(component);
    }
    this.setState({isDragging: false});
  }

  render() {

    const {widgets = [], classes} = this.props;

    return (
      <div className={classes.root}>
        <GridList className={classes.gridList}>
          {widgets.map( widget => (
              <GridListTile
                key={widget.title}
                classes={{
                  tile: classes.gridListTile
                }}
                draggable
                onDragStart={() => this.handleDrag(widget)}
                onDragEnd={this.handleDragEnd.bind(this)}
              >
                <GridListTileBar
                  title={widget.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }

}

Toolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Toolbar);
