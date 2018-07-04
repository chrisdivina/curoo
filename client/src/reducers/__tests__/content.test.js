import uniqid from 'uniqid';
import reducer, {
  createElementInState,
  moveElementInState,
  deleteElementFromState,
  dragElementInState
} from '../content';

jest.mock('uniqid');

let state;
let action = {};
let result;

describe('the content reducer', () => {

  it('should return the current state', () => {
    state = 'current';
    action = { type: 'unknown' };
    result = reducer(state, action);
    expect(result).toEqual('current');
  });

  it('should return the initial state', () => {
    state = undefined;
    result = reducer(state, action);
    expect(result).toEqual({
      items: {},
      sections: {}
    });
  });

  it('should create an element', () => {
    uniqid.mockReturnValueOnce('e1');
    action = createElementInState('myFirstElement', { title: 'First Element'}, 's1');
    state = reducer(state, action);
    expect(state).toMatchSnapshot();

    uniqid.mockReturnValueOnce('e2');
    action = createElementInState('mySecondElement', { title: 'Second Element'}, 's1');
    state = reducer(state, action);
    expect(state).toMatchSnapshot();

    uniqid.mockReturnValueOnce('e3');
    action = createElementInState('myThirdElement', { title: 'Third Element'}, 's2');
    state = reducer(state, action);
    expect(state).toMatchSnapshot();
  });

  it('should move an element', () => {
    action = moveElementInState('e2', 's2', 1);
    state = reducer(state, action);
    expect(state).toMatchSnapshot();

    action = moveElementInState('e3', 's2', 1);
    state = reducer(state, action);
    expect(state).toMatchSnapshot();

    action = moveElementInState('e1', 's2', 1);
    state = reducer(state, action);
    expect(state).toMatchSnapshot();

    action = moveElementInState('e1', 's2', 0);
    state = reducer(state, action);
    expect(state).toMatchSnapshot();
  });

  it('should drag an element', () => {
    action = dragElementInState('e1');
    state = reducer(state, action);
    expect(state).toMatchSnapshot();
  });

  it('should remove an element', () => {
    action = deleteElementFromState('e2');
    state = reducer(state, action);
    expect(state).toMatchSnapshot();
  });

});
