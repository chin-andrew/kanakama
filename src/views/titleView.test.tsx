import { shallow } from 'enzyme';
import sinon from 'sinon';

import { noop } from '../utils';
import title from './titleView';
import * as logo from '../title/logo';

describe('title tests', () => {

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(logo, 'default'); // Need to stub logo call due to require.context
  });

  afterEach(() => {
    stub.restore();
  });

  it('renders a title page', () => {
    const wrapper = shallow(title(noop, noop));
    expect(wrapper.find('#title-container')).toHaveLength(1);
  });
});
