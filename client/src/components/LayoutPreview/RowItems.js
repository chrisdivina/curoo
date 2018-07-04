import React, { Fragment } from 'react';
import RowHeader from './RowHeader';

const RowItems = ({row, rowId, rowIndex, columnsById}) => {
  return (
    <Fragment>
      <RowHeader
        index={rowIndex}
        row={row}
      />
      {columnsById.map ((columnId, columnIndex) => (
        <div
          key={rowId + columnId}
          className="item"
        >
          <span>Item {rowIndex * columnsById.length + columnIndex + 1}</span>
        </div>
      ))}
    </Fragment>
  )
}


export default RowItems;
