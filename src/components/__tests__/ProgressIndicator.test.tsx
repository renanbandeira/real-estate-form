import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressIndicator from '../ProgressIndicator';

test('renders Progress Indicator with children', () => {
  const wrapper = render(
    <ProgressIndicator>
      <li className="active">Home</li>
      <li>About</li>
    </ProgressIndicator>);
  let pageContent = screen.getByText(/Home/i);
  expect(pageContent).toBeInTheDocument();

  pageContent = screen.getByText(/About/i);
  expect(pageContent).toBeInTheDocument();
});
