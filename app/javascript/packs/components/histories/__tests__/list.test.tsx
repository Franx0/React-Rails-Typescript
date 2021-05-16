import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, mount } from 'enzyme';

import List from '../list';

describe('Wrapper Component', () => {
  let list;

  beforeEach(() => {
    list = shallow(<List data={[
      {history: {data: [1], created_at: 'now - 1'}, calculation: 1},
      {history: {data: [1,1], created_at: 'now'}, calculation: 2}
    ]} />);
  });

  afterEach(() => {
    list.unmount();
  });

  it('returns one table child', () => {
    expect(list.length).toEqual(1);
    expect(list.find('table')).toHaveLength(1);
  });

  it('renders table trs children', () => {
    expect(list.find('thead').find('tr')).toHaveLength(1);
    expect(list.find('tbody').find('tr')).toHaveLength(2);
  });

  it('renders table tbody tds children values', () => {
    expect(list.find('tbody').find('tr').at(0).find('td').at(0).text()).toEqual('(1) = 1');
    expect(list.find('tbody').find('tr').at(0).find('td').at(1).text()).toEqual('(1 + 1) = 2');
    expect(list.find('tbody').find('tr').at(1).find('td').at(0).text()).toEqual('now - 1');
    expect(list.find('tbody').find('tr').at(1).find('td').at(1).text()).toEqual('now');
  });
});
