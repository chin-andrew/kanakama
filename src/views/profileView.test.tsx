import React from 'react';
import { shallow } from 'enzyme';

import { noop } from '../utils';
import ProfileView from './profileView';
import StatsDisplay from '../stats/stats';

const defaultProps = {
  setView: noop,
};

describe('ProfileView tests', () => {
  const renderProfileView = (props: object = {}) => {
    return shallow(<ProfileView {...defaultProps} {...props} />);
  };

  it('should display a message if there are no stats', () => {
    const wrapper = renderProfileView();
    wrapper.setState({ stats: null });
    expect(wrapper.find('#no-stats').exists()).toBe(true);
  });

  it('should render stats if they exist', () => {
    const wrapper = renderProfileView();
    wrapper.setState({ stats: 'notNull' });
    expect(wrapper.find('#clear-stats').exists()).toBe(true);
    expect(wrapper.find(StatsDisplay).exists()).toBe(true);
  });
});
