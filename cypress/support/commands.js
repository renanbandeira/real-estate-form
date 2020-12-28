// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('submitName', (name) => {
  cy.get('.form-label').should('have.text', 'Full Name');
  cy.get('.progress-indicator > .active').should('have.length', 1);
  cy.get('input').type(name);
  cy.get('form').submit();
  cy.get('.form-label').should('have.text', 'Email Address');
  cy.get('.progress-indicator > .active').should('have.length', 2);
});

Cypress.Commands.add('submitEmail', (email) => {
  cy.get('.form-label').should('have.text', 'Email Address');
  cy.get('.progress-indicator > .active').should('have.length', 2);
  cy.get('input').type(email);
  cy.get('form').submit();
  cy.get('.form-label').should('have.text', 'Phone Number');
  cy.get('.progress-indicator > .active').should('have.length', 3);
});

Cypress.Commands.add('submitPhoneNumber', (phoneNumber) => {
  cy.get('.form-label').should('have.text', 'Phone Number');
  cy.get('.progress-indicator > .active').should('have.length', 3);
  cy.get('input').type(phoneNumber);
  cy.get('form').submit();
  cy.get('.form-label').should('have.text', 'Salary Indicator');
  cy.get('.progress-indicator > .active').should('have.length', 4);
});

Cypress.Commands.add('submitSalaryIndicator', (optionNumber) => {
  cy.get('input').should('have.length', 5);
  cy.get('.form-label').should('have.text', 'Salary Indicator');
  cy.get('.progress-indicator > .active').should('have.length', 4);
  cy.get(`:nth-child(${optionNumber}) > .form-check-label`).click();
  cy.get('form').submit();
  cy.get('.card-header').should('have.text', 'Form Review');
  cy.get('.progress-indicator > .active').should('have.length', 5);
});

Cypress.Commands.add('validateSummary', ({ name, phone, salaryIndicator, email }) => {
  cy.get('.card-header').should('have.text', 'Form Review');
  cy.get('.progress-indicator > .active').should('have.length', 5);
  cy.get('.list-group > :nth-child(1)').should('have.text', `Full Name: ${name}`);
  cy.get('.list-group > :nth-child(2)').should('have.text', `Phone Number: ${phone}`);
  cy.get('.list-group > :nth-child(3)').should('have.text', `Email Address: ${email}`);
  cy.get('.list-group > :nth-child(4)').should('have.text', `Salary Indicator: ${salaryIndicator}`);
});
