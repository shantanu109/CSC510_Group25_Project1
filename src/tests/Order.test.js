import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Order from '../components/Order';
import { configureStore } from '../store';

const store = configureStore();
test('createOrder', () => {
    const wrapper = shallow(<createOrder/>);
    expect(wrapper).toMatchSnapshot();
   });
// const mockMenu = [
//   {
//     _id: 1,
//     menuname: 'test menu',
//     costmenu: 10,
//   },
// ];

const mockOrder = [
  {
    _id: 1,
    items: [
      {
        id: 1,
        quantity: 2,
        cost: 20,
      },
    ],
    totalCost: 20,
  },
];

test('render', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Order mockOrder={mockOrder}  />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
