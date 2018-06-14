import uniqid from 'uniqid';
const ADD_COMPETENCY = 'competencies/ADD_COMPETENCY';
const UPDATE_COMPETENCY = 'competencies/UPDATE_COMPETENCY';
const DELETE_COMPETENCY = 'competencies/DELETE_COMPETENCY';
const ADD_SKILL = 'competencies/ADD_SKILL';
const UPDATE_SKILL = 'competencies/UPDATE_SKILL';
const DELETE_SKILL = 'competencies/DELETE_SKILL';

const initialState = {
  items: {},
  itemsById: [],
  skills: {}
}

export const addStoreCompetency = () => {
  return {
    type: ADD_COMPETENCY
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPETENCY:
      return {
        ...state,
        itemsById: [
          ...state.itemsById,
          uniqid()
        ]
      };
    case UPDATE_COMPETENCY:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id] : {
            ...state.items[action.id],
            ...action.values
          }
        }
      };
    case DELETE_COMPETENCY:
      const { [action.id]: item, ...remainingItems } = state.items;
      return {
        ...state,
        items: { ...remainingItems },
        itemsById: state.itemsById.filter(itemId => itemId !== action.id)
      };
    case ADD_SKILL:
      return {
        ...state,
        items: {
          ...state.items,
          [action.itemId]: {
            ...state.items[action.itemId],
            skillsById: [
              ...state.items[action.item].skillsById,
              uniqid()
            ]
          }
        }
      };
    case UPDATE_SKILL:
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.id]: {
            ...state.skills[action.id],
            ...action.values
          }
        }
      };
    case DELETE_SKILL:
      return {
        ...state,
        items: {
          ...state.items,
          [action.itemId]: {
            ...state.items[action.itemId],
            skillsById: state.items[action.item].skillsById.filter(skillId => skillId !== action.id)
          }
        }
      }
    default: return state;
  }
}
