import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PhoneNumberFormPage from '../PhoneNumberFormPage';
import { SET_PHONE_NUMBER } from '../../redux/actions';
import { DefaultAction } from '../../redux/types';
import { initialState } from '../../redux/store';

test('renders phone number input', () => {
  const wrapper = render(
    <StaticRouter>
      <PhoneNumberFormPage store={initialState} dispatch={jest.fn()} />
    </StaticRouter>);
  const formName = screen.getByText(/Phone Number/i);
  expect(formName).toBeInTheDocument();

  expect(screen.getAllByRole('textbox')).toHaveLength(1);
});

test('sets phone number', () => {
  const phone = '+1 (489) 2389-0912';
  const mockDispatch = (action: DefaultAction): void => {
    expect(action.type).toEqual(SET_PHONE_NUMBER);
    expect(action.payload).toEqual(phone);
  };

  const wrapper = render(
    <StaticRouter>
      <PhoneNumberFormPage store={initialState} dispatch={mockDispatch} />
    </StaticRouter>);

  expect(screen.getAllByRole('textbox')).toHaveLength(1);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: phone } });
  fireEvent.submit(input);
});
