import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryPage from '../SummaryPage';
import { SALARY_INDICATORS } from '../../redux/constants';
import { SET_SALARY_INDICATOR } from '../../redux/actions';
import { DefaultAction } from '../../redux/types';
import { initialState } from '../../redux/store';

test('renders without crashing', () => {
  render(
    <StaticRouter>
      <SummaryPage store={initialState} dispatch={jest.fn()} />
    </StaticRouter>);
  const formName = screen.getByText(/Form Review/i);
  expect(formName).toBeInTheDocument();
});

test('renders form review', () => {
  const mockDispatch = (action: DefaultAction): void => {};

  const state = {
    fullName: 'Renan Bandeira',
    email: 'abc@gmail.com',
    phoneNumber: '+1 (329) 3289-0291',
    salaryIndicator: 'thirdIndicator',
    currentStep: 4
  }

  render(
    <StaticRouter>
      <SummaryPage store={state} dispatch={mockDispatch} />
    </StaticRouter>);

    const formName = screen.getByText('Form Review');
    expect(formName).toBeInTheDocument();

    const fullName = screen.getByText('Full Name: Renan Bandeira');
    expect(fullName).toBeInTheDocument();

    const phoneNumber = screen.getByText('Phone Number: +1 (329) 3289-0291');
    expect(phoneNumber).toBeInTheDocument();

    const email = screen.getByText('Email Address: abc@gmail.com');
    expect(email).toBeInTheDocument();

    const salaryIndicator = screen.getByText('Salary Indicator: 2.000 - 3.000');
    expect(salaryIndicator).toBeInTheDocument();

});
