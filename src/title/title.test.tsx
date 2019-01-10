import renderer from 'react-test-renderer';
import sinon from 'sinon';
import title from './title';
import * as logo from './logo';

describe('title tests', () => {

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(logo, 'default'); // Need to stub logo call due to require.context
  });

  afterEach(() => {
    stub.restore();
  });

  it('renders a title page', () => {
    const tree = renderer.create(title(() => Object)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
