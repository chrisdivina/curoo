import { combineReducers } from 'redux';
import areas from './areas';
import components from './components';
import content from './content';
import payload from './payload';
import sections from './sections';
import skills from './skills';

export default combineReducers({
  areas,
  components,
  content,
  payload,
  sections,
  skills
});
