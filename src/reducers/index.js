import { combineReducers } from 'redux';
import skills from './skills';
import content from './content';
import components from './components';
import payload from './payload';

export default combineReducers({
  skills,
  content,
  components,
  payload
});
