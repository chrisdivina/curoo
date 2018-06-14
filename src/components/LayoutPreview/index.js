import React from 'react';
import './styles.css';

const LayoutPreview = ({grid}) => {

  const { templates = {} } = grid;
  const {
    rows = {},
    columns = {},
    rowsById = [],
    columnsById = []
  } = templates;

  const itemsCount = rowsById.length * columnsById.length;
  const items = [];
  for (let i = 1; i <= itemsCount; i++) {
    items.push(<div key={i} className="item"><span>Item {i}</span></div>)
  }

  // Columns
  let gridTemplateColumns = columnsById.map( id => {
    const { name, width } = columns[id];
    if (name.length > 0) {
      return `[${name}] ${width}`;
    }
    return `${width}`;
  });
  gridTemplateColumns = gridTemplateColumns.join(' ');

  // Rows
  let gridTemplateRows = rowsById.map( id => {
    const { name, height } = rows[id];
    if (name.length > 0) {
      return `[${name}] ${height}`;
    }
    return `${height}`;
  });
  gridTemplateRows = gridTemplateRows.join(' ');

  const containerStyles = {
    gridTemplateColumns,
    gridTemplateRows
  };

  return (
    <div className="container" style={containerStyles}>
      {items.map(item => item)}
    </div>
  )
};

export default LayoutPreview;
