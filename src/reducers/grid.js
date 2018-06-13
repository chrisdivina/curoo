
export const updateRowGapInState = gap => {
  return {
    type: UPDATE_ROW_GAP,
    gap
  };
};

export const updateColumnGapInState = gap => {
  return {
    type: UPDATE_COLUMN_GAP,
    gap
  };
};

export const addRowToState = (height, name = '') => {
  return {
    type: ADD_ROW,
    height,
    name
  };
};

export const removeRowFromState = id => {
  return {
    type: REMOVE_ROW,
    id
  };
};

export const addColumnToState = (width, name = '') => {
  return {
    type: ADD_COLUMN,
    width,
    name
  };
};

export const removeColumnFromState = id => {
  return {
    type: REMOVE_COLUMN,
    id
  };
};

export const addAreaToState = name => {
  return {
    type: ADD_AREA,
    name
  };
};

export const updateAreaInState = (oldName, newName) => {
  return {
    type: UPDATE_AREA,
    oldName,
    newName
  };
};

export const removeAreaFromState = name => {
  return {
    type: REMOVE_AREA,
    name
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ROW_GAP:
      return {
        ...state,
        gap: {
          ...state.gap,
          row: action.gap
        }
      };
    case UPDATE_COLUMN_GAP:
      return {
        ...state,
        gap: {
          ...state.gap,
          column: action.gap
        }
      };
    case ADD_ROW:
      return {
        ...state,
        templates: {
          ...state.templates,
          rows: {
            ...state.templates.rows,
            [uniquid()]: {
              name: action.name,
              height: action.height
            }
          }
        }
      };
    case REMOVE_ROW:
      const { [action.id]: value, ...rest } = state.templates.rows;
      return {
        ...state,
        templates: {
          ...state.templates,
          rows: {
            ...rest
          }
        }
      };
    case ADD_COLUMN:
      return {
        ...state,
        templates: {
          ...state.templates,
          columns: {
            ...state.templates.columns,
            [uniquid()]: {
              name: action.name,
              width: action.width
            }
          }
        }
      };
    case REMOVE_COLUMN:
      const { [action.id]: value, ...rest } = state.templates.columns;
      return {
        ...state,
        templates: {
          ...state.templates,
          columns: {
            ...rest
          }
        }
      };
    case ADD_AREA:
      return {
        ...state,
        templates: {
          ...state.templates,
          areas: [
            ...state.templates.areas,
            action.name
          ]
        }
      };
    case REMOVE_AREA:
      return {
        ...state,
        templates: {
          ...state.templates,
          areas: state.templates.areas.filter(area => area !== action.name)
        }
      };
    default: return state;
  }
}
