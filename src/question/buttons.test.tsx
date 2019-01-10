import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import kana from '../kana';
import Buttons from './buttons';

const defaultProps = {
  buttonOptions: [0, 1, 2],
  onClickCorrect: () => Object,
  onClickIncorrect: () => Object,
  selectedKana: kana[0],
};

describe('answer buttons tests', () => {
  const renderButtons = (props: object = {}): any => {
    return shallow(<Buttons {...defaultProps} {...props} />);
  };

  it('should render 3 buttons', () => {
    const wrapper = renderButtons();
    expect(wrapper.find('#answer-button')).toHaveLength(3);
  });

  it('should display the correct answer when an incorrect answer is selected', () => {
    const wrapper = renderButtons();
    const button = wrapper.find('#answer-button').get(1);
    button.props.onClick();
    expect(wrapper.instance().state.incorrectAnswer).toEqual(kana[1].name);
    expect(wrapper.find('.incorrect')).toHaveLength(2);
    expect(wrapper.exists('.correct')).toBe(true);
  });

  it('should display a `next` button when an incorrect answer is selected', () => {
    const wrapper = renderButtons();
    const button = wrapper.find('#answer-button').get(1);
    button.props.onClick();
    expect(wrapper.instance().state.incorrectAnswer).toEqual(kana[1].name);
    expect(wrapper.find('#answer-button')).toHaveLength(3);
    expect(wrapper.exists('#next-button')).toBe(true);
  });

  it('should not display a `next` button when the correct answer is selected', () => {
    const answerSpy = sinon.spy();
    const wrapper = renderButtons({ onClickCorrect: answerSpy });
    const button = wrapper.find('#answer-button').get(0);
    button.props.onClick();
    sinon.assert.calledOnce(answerSpy);
    expect(wrapper.find('#answer-button')).toHaveLength(3);
    expect(wrapper.exists('#next-button')).toBe(false);
  });
});
