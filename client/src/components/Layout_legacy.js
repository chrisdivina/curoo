import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import withGrid from 'hoc/withGrid';
import LayoutPreview from './LayoutPreview';

const units = ['px', '%', 'em', 'vh', 'vw'];

const Layout = (props) => {

  const {
    grid = {},
    updateGap,
    insertRow,
    insertColumn
  } = props;
  const { gap = {} } = grid;

  return (
    <Fragment>
      <div>
        <Typography variant="headline" gutterBottom>
          Layout
        </Typography>
        <Typography variant="title" gutterBottom>
          Grid
        </Typography>
        <button onClick={() => insertRow()}>Insert Row</button>
        <button onClick={() => insertColumn()}>Insert Column</button>
        <Typography variant="subheading" gutterBottom>
          Gaps
        </Typography>
        <input
          type="text"
          value = {gap.row.value}
        />
        <select defaultValue={gap.row.unit}>
          {units.map( unit => (
            <option
              key={unit}
              value={unit}
            >
              {unit}
            </option>
          ))}
        </select>
        <Typography variant="title" gutterBottom>
          Areas
        </Typography>
        <input type="text" />
      </div>
      <div>
        <LayoutPreview />
      </div>
    </Fragment>
  )
};

export default withGrid(Layout);
