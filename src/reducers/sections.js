import uniqid from 'uniqid';

const ADD_SECTION = 'section/add';
const REMOVE_SECTION = 'section/remove';

export const addSectionToState = (id, area, component) => {
  return {
    type: ADD_SECTION,
    area,
    component
  }
}

export const removeSectionFromState = id => {
  return {
    type: REMOVE_SECTION,
    id
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_SECTION:
      const id = uniqid();
      return {
        ...state,
        [id]: {
          area: action.area,
          component: action.component
        }
      };
    case REMOVE_SECTION:
      const { removedSection, ...rest } = state;
      return { ...rest };
    default: return state;
  }
}
