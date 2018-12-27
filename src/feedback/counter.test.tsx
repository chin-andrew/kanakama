import renderer from 'react-test-renderer';
import counter from './counter';

describe('counter tests', () => {
  it('renders a counter', () => {
    const tree = renderer.create(counter(0, 0)).toJSON();
    expect(tree).toMatchSnapshot();
  })
})