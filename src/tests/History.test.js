import React from 'react';
import { shallow } from 'enzyme';
import TodoLists from '../../components/THistory';
test('should test History component', () => {
 const wrapper = shallow(<History />);
 expect(wrapper).toMatchSnapshot();
});
