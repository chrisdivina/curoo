import {
  UPDATE_JOB,
  SAVE_JOB,
  EDIT_JOB,
  CANCEL_EDIT_JOB,
  DELETE_JOB
} from './content';

export const editJob = id => ({
  type: EDIT_JOB,
  id
});
export const updateJob = (id, job) => ({
  type: UPDATE_JOB,
  id,
  job
});
export const saveJob = id => ({ type: SAVE_JOB });
export const cancelEditJob = () => ({ type: CANCEL_EDIT_JOB });
export const deleteJob = id => ({
  type: DELETE_JOB,
  id
});

export default (state = {}, action) => {
  switch (action.type) {
    case EDIT_JOB:
      return {
        ...state,
        old: state.items,
        items: state.items.map((item, index) => index === action.id ? {
          ...item,
          isEditing: true,
          isUpdated: false
        } : item)
      };
    case UPDATE_JOB:
      return {
        ...state,
        old: state.items,
        items: state.items.map((item, index) => index === action.id ? {
          ...item,
          ...action.job,
          isEditing: true,
          isUpdated: true
        } : item)
      };
    case SAVE_JOB:
      return {
        ...state,
        items: state.items.map(item => ({
          ...item,
          isEditing: false,
          isUpdated: false
        }))
      };
    case CANCEL_EDIT_JOB:
      return {
        ...state,
        items: state.old.map(item => ({
          ...item,
          isEditing: false,
          isUpdated: false
        }))
      };
    case DELETE_JOB:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.id)
      };
    default:
      return state;
  }
}
