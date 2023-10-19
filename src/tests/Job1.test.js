import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Job1 from '../components/Job1';
import { configureStore } from '../store'


const store = configureStore()



const menu = {
ingredients: [
{
inventory_id: {
"itemname": "Lettuce"
},
quantity: 2,
},
]
};




// const application = []


test('render', () => {
const wrapper = mount(
<Provider store={store}>
<Job1 menu = {menu}/>
</Provider>
);
expect(wrapper).toMatchSnapshot();


});
