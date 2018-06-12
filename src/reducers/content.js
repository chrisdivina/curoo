import uniqid from 'uniqid';

// Actions
const ADD_ELEMENT = 'content/add_element';
const DELETE_ELEMENT = 'content/delete_element';

// Action creators
export const addElementToState = name => {
  return {
    type: ADD_ELEMENT,
    name
  }
};

export const deleteElementFromState = id => {
  return {
    type: DELETE_ELEMENT,
    id
  }
};

// Main reducer
export default (state = [], action) => {
  switch (action.type) {
    case ADD_ELEMENT:
      return [
        ...state,
        {
          id: uniqid(),
          name: action.name
        }
      ];
    case DELETE_ELEMENT: return state.filter( el => el.id !== action.id );
    default: return state;

  }
};
