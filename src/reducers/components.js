import uniquid from 'uniqid';

const DELETE_COMPONENT = 'component/delete';
const ADD_COMPONENT = 'component/add';

export const removeComponentFromState = id => {
  return {
    type: DELETE_COMPONENT,
    id
  }
};

export const addComponentToState = (name, title = '') => {
  return {
    type: ADD_COMPONENT,
    title,
    name
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COMPONENT:
      const { [action.id], ...rest };
      return { ...rest };
    case ADD_COMPONENT:
      const id = uniquid();
      return {
        ...state,
        [id]: {
          id,
          title: action.tile,
          name: action.name
        }
      }
    default: return state;
  }
}
