import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

const AppContent = props => {
  const { children, classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  )
};

export default withStyles(styles)(AppContent);
