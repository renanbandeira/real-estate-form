import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import EmailFormPage from '../EmailFormPage';
import { SET_EMAIL } from '../../redux/actions';
import { DefaultAction } from '../../redux/types';
import { initialState } from '../../redux/store';

test('renders email input', () => {
  const wrapper = render(
    <StaticRouter>
      <EmailFormPage store={initialState} dispatch={jest.fn()} />
    </StaticRouter>);
  const formName = screen.getByText(/Email Address/i);
  expect(formName).toBeInTheDocument();

  expect(screen.getAllByRole('textbox')).toHaveLength(1);
});

test('sets email', () => {
  const email = 'email@gmail.com';
  const mockDispatch = (action: DefaultAction): void => {
    expect(action.type).toEqual(SET_EMAIL);
    expect(action.payload).toEqual(email);
  };

  const wrapper = render(
    <StaticRouter>
      <EmailFormPage store={initialState} dispatch={mockDispatch} />
    </StaticRouter>);
  expect(screen.getAllByRole('textbox')).toHaveLength(1);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: email } });
  fireEvent.submit(input);
});
