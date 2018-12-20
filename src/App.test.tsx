import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as kanaImage from './components/image';
import { EModes } from './types/mode'; 
import QuestionView from './views/questionView';
import App from './App';

describe('App tests', () => {
  const renderApp = () => {
    return shallow(<App />)
  }

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(kanaImage, 'default');
  })

  afterEach(() => {
    stub.restore();
  })

  it('renders the title view when no mode is selected', () => {
    const wrapper = renderApp();
    expect(wrapper.find('.title-container')).toHaveLength(1);
    expect(wrapper.find(QuestionView)).toHaveLength(0);
  })

  it('renders the question view when a practice mode is selected', () => {
    const wrapper = renderApp();
    wrapper.setState({ mode: EModes.hiragana })
    expect(wrapper.find(QuestionView)).toHaveLength(1);
    expect(wrapper.find('.title-container')).toHaveLength(0);
  })
})