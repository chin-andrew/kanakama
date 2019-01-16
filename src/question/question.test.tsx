import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { EModes } from '../types/mode';
import AnswerButtons from './buttons';
import Question from './question';
import * as kanaImage from '../components/image';
import { ESystem } from '../types/kana';

const defaultProps = {
  incrementCorrect: () => Object,
  incrementIncorrect: () => Object,
  mode: EModes.hiragana,
};

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
    wrapper.setState({ mode: EModes.hiragana, system: ESystem.hiragana });
    expect(wrapper.find(AnswerButtons)).toHaveLength(1);
  });
});
