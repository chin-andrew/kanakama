import { shallow } from 'enzyme';
import counter from './counter';

describe('counter tests', () => {
  const renderCounter = (correct: number, incorrect: number) => {
    return shallow(counter(correct, incorrect))
  }

  it('renders a counter object', () => {
    const wrapper = renderCounter(0, 0);
    expect(wrapper.find('.counter__score')).toHaveLength(2);
  })
})