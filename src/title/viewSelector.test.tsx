import React from 'react';
import { shallow } from 'enzyme';

import { noop } from '../utils';
import ViewSelector from './viewSelector';

describe('mode selector tests', () => {
  it('renders buttons for selecting a practice mode', () => {
    const wrapper = shallow(<ViewSelector setPracticeMode={noop} setView={noop} />);
    expect(wrapper.find('#mode-container')).toHaveLength(1);
  });
});
