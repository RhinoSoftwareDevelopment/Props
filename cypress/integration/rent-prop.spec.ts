import { Chance } from 'chance';
const chance = new Chance();

describe('As a user I want to rent a prop', () => {
    
    const professor_incharge = chance.name();
    const proyect = chance.word();
    const begin = new Date();
    const end = new Date();
    const begin_time = '09:00'
    const end_time = '13:00';

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.login('di@gah.ua', '123456789');
    });

    it('contains title catalgo', () => {
        cy.contains('Catálogo');
    });

    it('contains at least one article', () => {
        cy.get('.product-card');
    });
    
    it('navigates to the form and comes back to the catalog', () => {
        cy.get('.product-card').first().click();
        cy.url().should('include','rent-form');
        cy.get('.mat-toolbar-row > .mat-icon').click();
        cy.url().should('include','catalog');
    });

    it('fills the form and routes to my requests', () => {
        cy.get('.product-card').first().click();
        cy.url().should('include', 'rent-form');
        cy.get('.rent-form__article-photo');
        cy.get('input[formControlName=professor_incharge]').type(professor_incharge);
        cy.get('input[formControlName=proyect]').type(proyect);
        cy.get('input[formControlName=begin]').type(begin.toDateString());
        cy.get('input[formControlName=end]').type(end.toDateString());
        cy.get('input[formControlName=begin_time]').type(begin_time);
        cy.get('input[formControlName=end_time]').type(end_time);
        cy.get('button[type=submit]').click();
        cy.url().should('include', 'requests');
    });

});