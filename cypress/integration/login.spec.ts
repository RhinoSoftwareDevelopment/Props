describe('As a user I want to login to the platform', () => {
    const email = 'di@gah.ua';
    const password = '123456789';
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

    it('contains login button', () => {
        cy.get('#login-button');
    });
    
    it('signs in a user', () => {
        cy.contains('Iniciar').click();
        cy.url().should('include', 'login');
        cy.get('input[formControlName=email]').type(email);
        cy.get('input[formControlName=password]').type(password);
        cy.get('button[type=submit]').click();
        expect(sessionStorage.getItem('uid')).to.not.be.undefined;
        cy.url().should('include', 'catalog');
    });

});
