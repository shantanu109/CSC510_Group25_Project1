import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Menu from '../components/Menu';
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
    itemname: 'Test Ingredient 1',
  },
  {
    _id: 2,
    itemname: 'Test Ingredient 2',
  },
];

const mockMenu = [
  {
    _id: 1,
    menuname: 'Test Menu 1',
    costmenu: 10,
    ingredients: [
      {
        inventory_id: 1,
        quantity: 2,
      },
    ],
  },
];

test('render', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Menu auth={mockAuth} job={mockJob} menu={mockMenu} />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
