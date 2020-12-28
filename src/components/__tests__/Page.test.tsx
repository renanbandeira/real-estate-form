import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../Page';

test('renders page with children', () => {
  const wrapper = render(
    <Page>
      Testing Page
    </Page>);
  const pageContent = screen.getByText(/Testing Page/i);
  expect(pageContent).toBeInTheDocument();
});
