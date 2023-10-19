import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Update from '../components/Update';
import { configureStore } from '../store';

const store = configureStore();

const dummyVal = {
  auth: {
    user: {
      email: 'test@gmail.com',
      _id: 'tester123',
      name: 'Tester',
    },
  },
  job: [
    {
      _id: 1,
      itemname: 'Test Number 1',
      quantity: 5,
    },
    {
      _id: 2,
      itemname: 'Test Number 2',
      quantity: 10,
    },
  ],
};


test('render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Update dummyVal={dummyVal} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
