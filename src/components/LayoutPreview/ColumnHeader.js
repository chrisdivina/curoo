import React, { Component } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import withGrid from 'hoc/withGrid';

class ColumnHeader extends Component {

  render() {

    const { column, index, removeColumn } = this.props;
    const { id, name, width } = column;

    return (
      <div className="header">
        <div>
          <Typography variant="body2" gutterBottom>
            {name.length > 0 ? name : `Column ${index + 1}`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            width: <span style={{ fontStyle: 'italic' }}>{width}</span>
          </Typography>
        </div>
        <div className="actions">
          <IconButton onClick={() => removeColumn(id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );

  }

}

export default withGrid(ColumnHeader);
