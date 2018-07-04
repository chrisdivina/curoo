import React, { Component } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import withGrid from 'hoc/withGrid';

class RowHeader extends Component {

  render() {

    const { row, index, removeRow } = this.props;
    const { id, name, height } = row;

    return (
      <div className="header">
        <div>
          <Typography variant="body2" gutterBottom>
            {name.length > 0 ? name : `Row ${index + 1}`}
          </Typography>
          <Typography variant="body2" gutterBottom>
            height: <span style={{ fontStyle: 'italic' }}>{height}</span>
          </Typography>
        </div>
        <div className="actions">
          <IconButton onClick={() => removeRow(id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );

  }

}

export default withGrid(RowHeader);
