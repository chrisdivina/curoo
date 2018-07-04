import uniqid from 'uniqid';
import skillsReducer, {
  addSkill,
  updateSkill,
  deleteSkill
} from '../skills';

jest.mock('uniqid');

describe('skills reducer', () => {

  it('should return an empty array', () => {
      let state;
      const action = {};
      const result = skillsReducer(state, action);
      expect(result).toEqual([]);
  });

  it('should return the current state', () => {
    const state = ['skill1'];
    const action = { type: 'unknown' };
    const result = skillsReducer(state, action);
    expect(result).toEqual(state);
  });

  it('should add a new skill', () => {
    uniqid.mockReturnValueOnce('mySkillId');
    const state = [];
    const action = addSkill({ name: 'skill1' });
    const result = skillsReducer(state, action);
    expect(uniqid).toHaveBeenCalled();
    expect(result).toEqual([
      {
        id: 'mySkillId',
        name: 'skill1'
      }
    ]);
  });

  it('should update new skill', () => {
    uniqid.mockReturnValueOnce('mySkillId');
    const state = [
      {
        id: 'mySkillId',
        name: 'skill1'
      }
    ];
    const action = updateSkill('mySkillId', { name: 'skill2', level: 3 });
    const result = skillsReducer(state, action);
    expect(result).toEqual([
      {
        id: 'mySkillId',
        name: 'skill2',
        level: 3
      }
    ]);
  });

  it('should delete a skill', () => {
    const state = [
      {
        id: 'skill1',
        name: 'skill1',
        level: 5
      },
      {
        id: 'skill2',
        name: 'skill2',
        level: 3
      }
    ];
    const action = deleteSkill('skill1');
    const result = skillsReducer(state, action);
    expect(result).toEqual([{
      id: 'skill2',
      name: 'skill2',
      level: 3
    }]);
  })

});
