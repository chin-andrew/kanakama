import { shallow } from 'enzyme';

import { noop } from '../utils';
import practiceModeSelector from './practice-mode-selector';

describe('mode selector tests', () => {
  it('renders buttons for selecting a practice mode', () => {
    const wrapper = shallow(practiceModeSelector(noop, noop));
    expect(wrapper.find('#mode-container')).toHaveLength(1);
  });
});
