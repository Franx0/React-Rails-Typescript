import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';

it('Header title', () => {
  const { container } = render(<Header title="Jest!" />);
  expect(container).toHaveTextContent('Jest!');
});
