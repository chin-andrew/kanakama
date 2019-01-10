import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { EModes } from '../types/mode';
import AnswerButtons from './buttons';
import Question from './question';
import * as kanaImage from '../components/image';

const defaultProps = {
  incrementCorrect: () => Object,
  incrementIncorrect: () => Object,
  mode: EModes.hiragana,
};

// We don't use a snapshot here since the question is randomly generated and thus the buttons would have different text
describe('question tests', () => {
  const renderQuestion = (props: object = {}) => {
    return shallow(<Question {...defaultProps} {...props} />);
  };

  let stub: any;
  beforeEach(() => {
    stub = sinon.stub(kanaImage, 'default'); // Need to stub logo call due to require.context
  });

  afterEach(() => {
    stub.restore();
  });

  it('should render a question', () => {
    const wrapper = renderQuestion();
    sinon.assert.calledOnce(stub); // calls kana image function
    expect(wrapper.find(AnswerButtons)).toHaveLength(1);
  });
});
