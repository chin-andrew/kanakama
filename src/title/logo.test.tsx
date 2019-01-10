import renderer from 'react-test-renderer';
import sinon from 'sinon';

import * as Image from '../components/image';
import logo from './logo';

describe('logo tests', () => {
  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(Image, 'default');
  });

  afterEach(() => {
    stub.restore();
  });

  it('renders the logo', () => {
    const tree = renderer.create(logo()).toJSON();
    expect(tree).toMatchSnapshot();
    sinon.assert.callCount(stub, 4);
  });
});
