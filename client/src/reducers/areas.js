import uniqid from 'uniqid';

const ADD_AREA = 'areas/add';
const UPDATE_AREA = 'area/update';
const DELETE_AREA = 'area/delete';

export const addAreaToState = name => {
  return {
    type: ADD_AREA,
    name
  };
};

export const removeAreaFromState = id => {
  return {
    type: DELETE_AREA,
    id
  };
};

export const updateAreaInState = (id, name) => {
  return {
    type: UPDATE_AREA,
    id,
    name
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_AREA: return [
      ...state,
      {
        id: uniqid(),
        name: action.name
      }
    ];
    case UPDATE_AREA: return state.map( area => {
      if (area.id === action.id) {
        area.name = action.name;
      }
      return area;
    });
    case DELETE_AREA: return state.filter(area => area.id !== action.id);
    default: return state;

  }
}
