import uniqid from 'uniqid';
import reducer, {
  addElementToState,
  deleteElementFromState
} from '../content';

jest.mock('uniqid');

let state;
let action = {};
let result;

describe('the content reducer', () => {

  it('should return an empty array', () => {
    state = undefined;
    result = reducer(state, action);
    expect(result).toEqual([]);
  });

  it('should return the current state', () => {
    state = 'current';
    action = { type: 'unknown' };
    result = reducer(state, action);
    expect(result).toEqual('current');
  });

  it('should add an element', () => {
    uniqid.mockReturnValueOnce('myId');
    state = [];
    action = addElementToState('myElement');
    result = reducer(state, action);
    expect(uniqid).toHaveBeenCalled();
    expect(result).toEqual([
      {
        id: 'myId',
        name: 'myElement'
      }
    ]);
  });

  it('should remove an element', () => {
    state = [
      {
        id: 'myId',
        name: 'myElement'
      }
    ];
    action = deleteElementFromState('myId');
    result = reducer(state, action);
    expect(result).toEqual([]);
  });

});
