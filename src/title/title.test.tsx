import { shallow, render } from 'enzyme';
import sinon from 'sinon';
import title from './title'
import * as logo from './logo';

describe('title tests', () => {

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(logo, 'default') // Need to stub logo call due to require.context
  })

  afterEach(() => {
    stub.restore()
  })

  const renderTitle = () => {
    return shallow(title(() => {}))
  }

  it('renders a title page', () => {
    const wrapper = renderTitle();
    sinon.assert.calledOnce(stub); // calls logo function
    expect(wrapper.find('.title').length).toEqual(1);
    expect(wrapper.find('.mode-selector').length).toEqual(1);
  })
})