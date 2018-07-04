import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  flex: {
    flex: 1,
  }
});

class TopBar extends Component {

  render() {

    const { classes } = this.props;
    const LinkToLayout = props => <Link to="/layout" {...props} />

    return (
      <AppBar
        position="absolute"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex} noWrap>
            Curoo
          </Typography>
          <div>
            <IconButton component={LinkToLayout} color="inherit">
              <ViewCompactIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
