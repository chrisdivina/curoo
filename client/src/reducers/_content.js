import uniqid from 'uniqid';

// Actions
const CREATE_ELEMENT = 'content/create_element';
const DELETE_ELEMENT = 'content/delete_element';
const DRAG_ELEMENT = 'content/drag_element';
const MOVE_ELEMENT = 'content/move_element';

// Action creators
export const createElementInState = (name, params, attachedTo) => {
  return {
    type: CREATE_ELEMENT,
    name,
    attachedTo,
    params
  }
};

export const deleteElementFromState = id => {
  return {
    type: DELETE_ELEMENT,
    id
  }
};

export const moveElementInState = (id, attachedTo, position) => {
  return {
    type: MOVE_ELEMENT,
    id,
    attachedTo,
    position
  }
}

export const dragElementInState = id => {
  return {
    type: DRAG_ELEMENT,
    id
  }
}

const createElement = (state, action) => {

  const id = uniqid();
  return {
    ...state,
    items: {
      ...state.items,
      [id] : {
        id,
        name: action.name,
        params: action.params,
        attachedTo: action.attachedTo,
        pending: true
      }
    },
    sections: {
      ...state.sections,
      [action.attachedTo]: state.sections[action.attachedTo] ?
        [
          ...state.sections[action.attachedTo],
          id
        ]
        : [id]
    }


  };

};

const deleteElement = (state, action) => {

  const { [action.id]: item, ...withoutElement } = state.items;
  const { attachedTo } = item;

  return {
    ...state,
    items: {
      ...withoutElement
    },
    sections: {
      ...state.sections,
      [attachedTo]: state.sections[attachedTo].filter(itemId => itemId !== action.id)
    }
  }
};

const moveElement = (state, action) => {

  const oldAttachedTo = state.items[action.id].attachedTo;
  const newAttachedTo = action.attachedTo;

  // First remove from old attachedTo
  let newState = {
    ...state,
    items: {
      ...state.items,
      [action.id]: {
        ...state.items[action.id],
        attachedTo: newAttachedTo,
        pending: false
      }
    },
    sections: {
      ...state.sections,
      [oldAttachedTo]: state.sections[oldAttachedTo].filter(itemId => itemId !== action.id),
    }
  };

  // Then insert it in new attachedTo
  return {
    ...newState,
    sections: {
      ...newState.sections,
      [newAttachedTo]: [
        ...newState.sections[newAttachedTo].slice(0, action.position),
        action.id,
        ...newState.sections[newAttachedTo].slice(action.position)
      ]
    }
  };

}

const initialState = {
  items: {},
  sections: {}
};

// Main reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ELEMENT:
      return createElement(state, action);
    case DRAG_ELEMENT:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            pending: true
          }
        }
      };
    case MOVE_ELEMENT: return moveElement(state, action);
    case DELETE_ELEMENT: return deleteElement(state, action);
    default: return state;

  }
};
