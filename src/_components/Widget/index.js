import React from 'react';
import * as widgets from '../Widgets';

const Widget = ({name, ...props, ...children}) => {

  const type = widgets[name];

  if (!type) return null;

  return React.createElement(
    type,
    ...props,
    ...children
  );

}

export default Widget;
