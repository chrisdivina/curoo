import React from 'react';
import { withUser, withContent } from 'hoc';
import { compose } from 'utils';
import { 
  AppBar,
  Toolbar,
  Typography,
  Badge,
  Button 
} from '@material-ui/core';

const LoggedIn = ({ onLogOut, isUpdated = false }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div>
          <Button
            color="inherit"
            disabled={!isUpdated}
          >
            Save Changes
          </Button>
          <Badge color="secondary" badgeContent={1}>
            <Button color="inherit">Drafts</Button>
          </Badge>
          <Button
            color="inherit"
            onClick={onLogOut}
          >
            Log Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default compose(
  withContent,
  withUser
)(LoggedIn);
