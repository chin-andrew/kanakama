import React from 'react';
import { shallow } from 'enzyme';

import Question from '../question/question';
import { EModes } from '../types/mode';
import { noop } from '../utils';
import PracticeView from './practiceView';

const defaultProps = {
  mode: EModes.all,
  setView: noop,
};

describe('PracticeView tests', () => {
  const renderPracticeView = (props: object = {}) => {
    return shallow(<PracticeView {...defaultProps} {...props} />);
  };

  it('renders a PracticeView', () => {
    const wrapper = renderPracticeView();
    expect(wrapper.find(Question)).toHaveLength(1);
    expect(wrapper.find('#counter')).toHaveLength(1);
  });
});
