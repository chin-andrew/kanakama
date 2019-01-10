import renderer from 'react-test-renderer';
import modeSelector from './mode-selector';

describe('mode selector tests', () => {
  it('renders buttons for selecting a practice mode', () => {
    const tree = renderer.create(modeSelector(() => Object)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
