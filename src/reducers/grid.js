import uniqid from 'uniqid';

const UPDATE_GAP = 'grid/update_gap';
const ADD_ROW = 'grid/add_row';
const REMOVE_ROW = 'grid/remove_row';
const ADD_COLUMN = 'grid/add_column';
const REMOVE_COLUMN = 'grid/remove_column';
const ADD_AREA = 'grid/add_area';
const UPDATE_AREA = 'grid/update_area';
const REMOVE_AREA = 'grid/delete_area';

export const updateGapInState = ({ row, column }) => {
  return {
    type: UPDATE_GAP,
    row,
    column
  }
}

export const addRowToState = (height = '1fr', name = '') => {
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

export const addColumnToState = (width = '1fr', name = '') => {
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

const initialState = {
  gap: {
    row: {
      value: 0,
      unit: 'px'
    },
    column: {
      value: 0,
      unit: 'px'
    }
  },
  templates: {
    rows: {},
    columns: {},
    rowsById: [],
    columnsById: []
  },
  areas: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAP:
      return {
        ...state,
        gap: {
          row: action.row ? action.row : state.gap.row,
          column: action.column ? action.column: state.gap.column
        }
      };
    case ADD_ROW:
      const rowId = uniqid();
      return {
        ...state,
        templates: {
          ...state.templates,
          rows: {
            ...state.templates.rows,
            [rowId]: {
              id: rowId,
              name: action.name,
              height: action.height
            }
          },
          rowsById: [
            ...state.templates.rowsById,
            rowId
          ]
        }
      };
    case REMOVE_ROW:
      const { [action.id]: row, ...remainingRows } = state.templates.rows;
      return {
        ...state,
        templates: {
          ...state.templates,
          rows: {
            ...remainingRows
          },
          rowsById: state.templates.rowsById.filter(rowId => rowId !== action.id)
        }
      };
    case ADD_COLUMN:
      const columnId = uniqid();
      return {
        ...state,
        templates: {
          ...state.templates,
          columns: {
            ...state.templates.columns,
            [columnId]: {
              id: columnId,
              name: action.name,
              width: action.width
            }
          },
          columnsById: [
            ...state.templates.columnsById,
            columnId
          ]
        }
      };
    case REMOVE_COLUMN:
      const { [action.id]: column, ...remainingColumns } = state.templates.columns;
      return {
        ...state,
        templates: {
          ...state.templates,
          columns: {...remainingColumns},
          columnsById: state.templates.columnsById.filter(columnId => columnId !== action.id)
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
