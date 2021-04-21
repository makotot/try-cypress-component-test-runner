import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

describe('ScrollSpy', () => {
  describe('on load', () => {
    beforeEach(() => {
      mount(<App />);
      cy.scrollTo(0, 0);
    });

    it('should render children', () => {
      cy.get('[data-cy=nav-wrapper]').children().should('have.length', 5);
      cy.get('[data-cy=section-wrapper]').children().should('have.length', 5);
    });
  });

  describe('on scroll', () => {
    beforeEach(() => {
      mount(<App />);
      cy.scrollTo(0, 0);
    });

    it('should have no active nav if there are no section in the viewport (Top)', () => {
      cy.scrollTo(0, 0);
      cy.get('[data-cy=nav-wrapper]').children().should('have.length', 5);
      cy.get('[data-cy=nav-wrapper]')
        .children()
        .filter('.active')
        .should('have.length', 0);
    });

    it('should have no active nav if there are no section in the viewport (Bottom)', () => {
      cy.scrollTo('100%', 0);
      cy.get('[data-cy=nav-wrapper]').children().should('have.length', 5);
      cy.get('[data-cy=nav-wrapper]')
        .children()
        .filter('.active')
        .should('have.length', 0);
    });

    it('should make 1st nav active when 1st section in the viewport', () => {
      cy.get('[data-cy=section-item').eq(0).scrollIntoView();
      cy.get('[data-cy=nav-item]').eq(0).should('have.class', 'active');
    });

    it('should make 2nd nav active when 2nd section in the viewport', () => {
      cy.get('[data-cy=section-item').eq(1).scrollIntoView();
      cy.get('[data-cy=nav-item]').eq(1).should('have.class', 'active');
    });
  });

  describe('on click', () => {
    beforeEach(() => {
      mount(<App />);
      cy.scrollTo(0, 0);
    });

    it('should make 1st nav active & 1st section in the viewport when click 1st nav', () => {
      cy.get('[data-cy=nav-item').eq(0).click();
      cy.get('[data-cy=nav-item]').eq(0).should('have.class', 'active');
      cy.get('[data-cy=section-item]').eq(0).should('have.class', 'active');
    });
  });
});
