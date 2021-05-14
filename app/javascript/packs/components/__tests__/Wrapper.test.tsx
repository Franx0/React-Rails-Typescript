import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, mount } from 'enzyme';

import Wrapper from '../Wrapper';
import Header from '../Header';
import Footer from '../Footer';

describe('Wrapper Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Wrapper.WrappedComponent store={{}} csrfToken={'token'} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('returns one child', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('renders children', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
