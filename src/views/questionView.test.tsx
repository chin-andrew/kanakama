import React from 'react';
import { shallow } from 'enzyme';

import Question from '../question/question';
import { EModes } from '../types/mode';
import QuestionView from './questionView';

const defaultProps = {
  mode: EModes.all,
};

describe('QuestionView tests', () => {
  const renderQuestionView = (props: object = {}) => {
    return shallow(<QuestionView {...defaultProps} {...props} />);
  };

  it('renders a QuestionView', () => {
    const wrapper = renderQuestionView();
    expect(wrapper.find(Question)).toHaveLength(1);
    expect(wrapper.find('#counter')).toHaveLength(1);
  });
});
