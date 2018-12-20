import { shallow } from 'enzyme';
import modeSelector from './mode-selector';

describe('mode selector tests', () => {
  const renderModeSelector = () => {
    return shallow(modeSelector(() => {}));
  }

  it('renders buttons for selecting a practice mode', () => {
    const wrapper = renderModeSelector();
    expect(wrapper.find('button')).toHaveLength(3)
  }) 
})