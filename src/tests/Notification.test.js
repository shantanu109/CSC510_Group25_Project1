import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Notification from '../components/Notification';
import { configureStore } from '../store';

const store = configureStore();

const mockAuth = {
  user: {
    email: 'test@example.com',
    _id: 'test123',
    name: 'Test User',
  },
  error: null,
};

const mockJob = [
  {
    _id: 1,
    itemname: 'Test Item 1',
    quantity: 5,
    dateexpired: '2023-11-01',
  },
  {
    _id: 2,
    itemname: 'Test Item 2',
    quantity: 15,
    dateexpired: '2023-11-05',
  },
];

test('render', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Notification auth={mockAuth} job={mockJob} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
