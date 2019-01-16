import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as kanaImage from './components/image';
import { EModes } from './types/mode';
import { EViews } from './types/views';
import QuestionView from './views/practiceView';
import App from './App';

describe('App tests', () => {
  const renderApp = () => {
    return shallow(<App />);
  };

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(kanaImage, 'default');
  });

  afterEach(() => {
    stub.restore();
  });

  it('renders the title view the the title view is set', () => {
    const wrapper = renderApp();
    wrapper.setState({ view: EViews.title });
    expect(wrapper.find('#title-container')).toHaveLength(1);
    expect(wrapper.find(QuestionView)).toHaveLength(0);
  });

  it('renders the question view when the practice view is set', () => {
    const wrapper = renderApp();
    wrapper.setState({ mode: EModes.hiragana, view: EViews.practice });
    expect(wrapper.find(QuestionView)).toHaveLength(1);
    expect(wrapper.find('#title-container')).toHaveLength(0);
  });
});
