/// <reference types="cypress" />

context('Form submission', () => {
  it('submits name', () => {
    cy.visit('/');
    cy.submitName('Renan Bandeira');
  });

  it('submits email', () => {
    cy.visit('/');
    cy.submitName('Renan Bandeira');
    cy.submitEmail('email@gmail.com');
  });

  it('submits phone number', () => {
    cy.visit('/');
    cy.submitName('Renan Bandeira');
    cy.submitEmail('email@gmail.com');
    cy.submitPhoneNumber('+1 (893) 3281-2109');
  });

  it('submits salary indicator', () => {
    cy.visit('/');
    cy.submitName('Renan Bandeira');
    cy.submitEmail('email@gmail.com');
    cy.submitPhoneNumber('+1 (893) 3281-2109');
    cy.submitSalaryIndicator(4);
  });

  it('validates summary', () => {
    const data = {
      name: 'Renan Bandeira',
      email: 'email@gmail.com',
      phone: '+1 (893) 3281-2109',
      salaryIndicator: '2.000 - 3.000'
    }
    cy.visit('/');
    cy.submitName(data.name);
    cy.submitEmail(data.email);
    cy.submitPhoneNumber(data.phone);
    cy.submitSalaryIndicator(4);
    cy.validateSummary(data);
  });
});
