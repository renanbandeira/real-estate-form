import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SalaryIndicatorFormPage from '../SalaryIndicatorFormPage';
import { SALARY_INDICATORS } from '../../redux/constants';
import { SET_SALARY_INDICATOR } from '../../redux/actions';
import { DefaultAction } from '../../redux/types';
import { initialState } from '../../redux/store';

test('renders salary indicator input', () => {
  const wrapper = render(
    <StaticRouter>
      <SalaryIndicatorFormPage store={initialState} dispatch={jest.fn()} />
    </StaticRouter>);
  const formName = screen.getByText(/Salary Indicator/i);
  expect(formName).toBeInTheDocument();

  expect(screen.getAllByRole('radio')).toHaveLength(5);
});

test('sets phone number', () => {
  const mockDispatch = (action: DefaultAction): void => {
    expect(action.type).toEqual(SET_SALARY_INDICATOR);
    expect(action.payload).toEqual(SALARY_INDICATORS['thirdIndicator']);
  };

  const wrapper = render(
    <StaticRouter>
      <SalaryIndicatorFormPage store={initialState} dispatch={mockDispatch} />
    </StaticRouter>);

  expect(screen.getAllByRole('radio')).toHaveLength(5);

  const radio = screen.getAllByRole('radio')[2];
  fireEvent.change(radio, { target: { checked: true } });
  fireEvent.submit(radio);
});
