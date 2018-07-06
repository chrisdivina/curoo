import React from 'react';
import createStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import { fetchData } from '../../reducers/content';
import withContent from '../withContent';

jest.mock('../../reducers/content');
fetchData.mockReturnValue({
  type: 'fetchData'
});

const mockStore = createStore();
const WrappedComponent = () => null;

describe('withContent', () => {

  it('should return a WrappedComponent with default props', () => {
    const state = {};
    const store = mockStore(state);
    const Component = withContent(WrappedComponent);
    const wrapper = shallow(<Component />, { context: { store } });
    expect(wrapper.dive().name()).toBe('WrappedComponent');
    expect(wrapper.dive().props()).toMatchObject({
      isLoading: true,
      data: {}
    });
    expect(wrapper.dive().props()).toHaveProperty('onFetch');
    expect(store.getActions()).toEqual([{
      type: 'fetchData'
    }]);
  });

  it('should return a WrappedComponent with props from state', () => {
    const state = {
      content: {
        isLoading: false,
        data: { someData: 'someData' }
      }
    };
    const store = mockStore(state);
    const Component = withContent(WrappedComponent);
    const wrapper = shallow(<Component />, { context: { store } });
    expect(wrapper.dive().props()).toMatchObject({
      isLoading: false,
      data: { someData: 'someData' }
    });
  });

});
