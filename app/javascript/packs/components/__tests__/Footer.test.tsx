import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Footer from '../Footer';

it('Footer text', () => {
  const { container } = render(<Footer text="Jest!" />);
  expect(container).toHaveTextContent('Jest!');
});
