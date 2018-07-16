import React from 'react';
import { withUser, withContent } from 'hoc';
import { compose } from 'utils';
import { Button } from '@material-ui/core';

const LoggedIn = ({ onLogOut, isUpdated = false }) => {
  return (
    <nav>
      <ul>
        <li>
          <Button
            variant="contained"
            color="primary"
            disabled={!isUpdated}
          >
            Save Changes
          </Button>
        </li>
        <li >
          <Button
            variant="contained"
            color="secondary"
            onClick={onLogOut}
          >
            Log Out
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default compose(
  withContent,
  withUser
)(LoggedIn);
