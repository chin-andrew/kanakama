import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as kanaImage from '../components/image';
import logo from './logo';

describe('logo tests', () => {
  const renderLogo = () => {
    return shallow(logo());
  }

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(kanaImage, 'default');
  })

  afterEach(() => {
    stub.restore();
  })

  it('renders the logo', () => {
    const wrapper = renderLogo();
    expect(wrapper.find('.logo-container')).toHaveLength(1);
    sinon.assert.callCount(stub, 4); // it calls the render image function 4 times;
  })
})