import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Job2 from '../components/Job2';
import { configureStore } from '../store';
const store = configureStore(); 
const mockProps = {
  auth: {
    user: {
      email: 'test@example.com',
      _id: 'test123',
      name: 'Test User',
    },
  },
  job: [
    {
      _id: 1,
      itemname: 'Test Item 1',
      quantity: 5,
    },
  ],
  menu: {
    menuname: 'Test Menu',
  },
  order: {
    _id: 1,
    items: [
      {
        item_id: {
          menuname: 'Test Item',
        },
        quantity: 2,
      },
    ],
  },
};


test('render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Job2 mockProps={mockProps} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });