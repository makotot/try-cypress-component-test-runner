import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

describe('ScrollSpy', () => {
  describe('With large header & footer', () => {
    describe('Load Event', () => {
      beforeEach(() => {
        mount(<App />);
        cy.scrollTo(0, 0);
      });

      it('should render children', () => {
        cy.get('[data-cy=nav-wrapper]').children().should('have.length', 5);
        cy.get('[data-cy=section-wrapper]').children().should('have.length', 5);
      });
    });

    describe('Scroll Event', () => {
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

    describe('Click Event', () => {
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

    describe('Resize Event', () => {
      beforeEach(() => {
        mount(<App />);
        cy.scrollTo(0, 0);
      });

      it('should change to make 1st nav active when the viewport height is resized to the point where the 1st section is visible', () => {
        cy.get('[data-cy=nav-item]').eq(0).should('not.have.class', 'active');
        cy.get('[data-cy=section-item]')
          .eq(0)
          .should('not.have.class', 'active');
        cy.viewport(500, 700);
        cy.get('[data-cy=nav-item]').eq(0).should('have.class', 'active');
        cy.get('[data-cy=section-item]').eq(0).should('have.class', 'active');
      });
    });
  });

  describe('With short last section', () => {
    describe('Scroll Event', () => {
      beforeEach(() => {
        mount(<App pattern="shortLastSection" />);
        cy.scrollTo(0, 0);
      });

      it('should make last nav active when scroll to bottom', () => {
        cy.scrollTo('bottom');
        cy.get('[data-cy=nav-item]').last().should('have.class', 'active');
        cy.get('[data-cy=section-item]').last().should('have.class', 'active');
      });
    });
  });
});
