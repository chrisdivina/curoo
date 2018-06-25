import React from 'react';
import withGrid from 'hoc/withGrid';
import ColumnHeader from './ColumnHeader';
import RowItems from './RowItems';
import './styles.css';

const LayoutPreview = ({grid}) => {

  const { templates = {} } = grid;
  const {
    rows = {},
    columns = {},
    rowsById = [],
    columnsById = []
  } = templates;


  // Columns
  console.log()
  let gridTemplateColumns = columnsById.map( id => {
    const { name, width } = columns[id];
    if (name.length > 0) {
      return `[${name}] ${width}`;
    }
    return `${width}`;
  });
  gridTemplateColumns = `auto ${gridTemplateColumns.join(' ')}`;

  // Rows
  let gridTemplateRows = rowsById.map( id => {
    const { name, height } = rows[id];
    if (name.length > 0) {
      return `[${name}] ${height}`;
    }
    return `${height}`;
  });
  gridTemplateRows = `auto ${gridTemplateRows.join(' ')}`;

  const containerStyles = {
    gridTemplateColumns,
    gridTemplateRows
  };

  return (
    <div className="container" style={containerStyles}>
      <div></div>
      {columnsById.map((id, index) =>
        <ColumnHeader
          key={id}
          index={index}
          column={columns[id]}
        />
      )}
      {rowsById.map((id, index) => (
        <RowItems
          key={id}
          row={rows[id]}
          rowId={id}
          rowIndex={index}
          columnsById={columnsById}
        />
      ))}
    </div>
  )
};

export default withGrid(LayoutPreview);
