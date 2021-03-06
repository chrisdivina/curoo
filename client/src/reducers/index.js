import { combineReducers } from 'redux';
import areas from './areas';
import competencies from './competencies';
import components from './components';
import content from './content';
import grid from './grid';
import payload from './payload';
import sections from './sections';
import skills from './skills';
import user from './user';
import app from './app';

export default combineReducers({
  areas,
  competencies,
  components,
  content,
  grid,
  payload,
  sections,
  skills,
  user,
  app
});
