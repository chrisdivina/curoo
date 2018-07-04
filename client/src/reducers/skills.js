import uniqid from 'uniqid';

// Actions
export const ADD_SKILL = 'reducers/skills/add';
export const UPDATE_SKILL = 'reducers/skills/update';
export const DELETE_SKILL = 'reducers/skills/delete';

// Action creators
export const addSkill = fields => {
  return {
    type: ADD_SKILL,
    fields
  }
};

export const updateSkill = (id, fields) => {
  return {
    type: UPDATE_SKILL,
    id,
    fields
  }
};

export const deleteSkill = id => {
  return {
    type: DELETE_SKILL,
    id
  }
};

// Main reducer
export default (state = [], action) => {

  switch (action.type) {
    case ADD_SKILL: return [
      ...state,
      {
        id: uniqid(),
        ...action.fields
      }
    ]
    case UPDATE_SKILL: return state.map(skill => {
      if (skill.id === action.id) {
        skill = {
          ...skill,
          ...action.fields
        }
      }
      return skill;
    });
    case DELETE_SKILL: return state.filter(skill => skill.id !== action.id);
    default: return state;

  }

}
