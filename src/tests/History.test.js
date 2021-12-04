import React from 'react';
import { shallow } from 'enzyme';
import TodoLists from '../../components/History';
test('should test History component', () => {
 const wrapper = shallow(<History />);
 expect(wrapper).toMatchSnapshot();
});
