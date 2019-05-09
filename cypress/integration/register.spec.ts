import { Chance } from 'chance';
const chance = new Chance();

describe('As a user I want to register to the platform', () => {
    const email = chance.email();
    const password = '123456789';
    const names = chance.name();
    const last_name = chance.last();

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('http://localhost:4200');
    });

    it('loads', () => {
        cy.visit('http://localhost:4200');
    });

    it('contains onboarding message', () => {
        cy.contains('Bienvenido');
    });
    
    it('contains register button', () => {
        cy.get('#register-button');
    });

    it('registers a new user', () => {
        cy.contains('Regístrate').click();
        cy.url().should('include', 'register');
        cy.get('input[formControlName=names]').type(names);
        cy.get('input[formControlName=last_name]').type(last_name);
        cy.get('input[formControlName=email]').type(email);
        cy.get('input[formControlName=password]').type(password);
        cy.get('button[type=submit]').click();
        cy.url().should('include', 'catalog');
    });
    

});
