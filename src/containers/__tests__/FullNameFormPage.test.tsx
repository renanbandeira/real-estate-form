import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FullNameFormPage from '../FullNameFormPage';
import { SET_FULL_NAME } from '../../redux/actions';
import { DefaultAction } from '../../redux/types';
import { initialState } from '../../redux/store';

test('renders name input', () => {
  const wrapper = render(
    <StaticRouter>
      <FullNameFormPage store={initialState} dispatch={jest.fn()} />
    </StaticRouter>);
  const formName = screen.getByText(/Full Name/i);
  expect(formName).toBeInTheDocument();

  expect(screen.getAllByRole('textbox')).toHaveLength(1);
});

test('sets name', () => {
  const name = 'Renan Bandeira';
  const mockDispatch = (action: DefaultAction): void => {
    expect(action.type).toEqual(SET_FULL_NAME);
    expect(action.payload).toEqual(name);
  };

  const wrapper = render(
    <StaticRouter>
      <FullNameFormPage store={initialState} dispatch={mockDispatch} />
    </StaticRouter>);

  expect(screen.getAllByRole('textbox')).toHaveLength(1);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: name } });
  fireEvent.submit(input);
});
