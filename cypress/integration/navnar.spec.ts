describe('As a user I want to navigate using a navbar', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.login('di@gah.ua', '123456789');
    });

    it('should be hidden at start', () => {
        cy.get('#navbar').should('be.hidden');
        // expect(cy.get('#navbar')).to.not.be.visible;
    });
    
    it('should contain menu button', () => {
        cy.get('#menu-button');
    });
    
    
    it('should no be hidden when click on menu', () => {
        cy.get('#menu-button').click();
        cy.get('#navbar').should('not.be.hidden');
    });
    
    it('should redirect me to my requests', () => {
        cy.get('#menu-button').click();
        cy.get('#navbar').should('not.be.hidden');
        cy.get('#requests-link').click();
        cy.url().should('include', 'requests');
        cy.get('#requests-link').should('have.class', 'sidenav__link--active');
    });

    it('should redirect me to catalog', () => {
        cy.get('#menu-button').click();
        cy.get('#navbar').should('not.be.hidden');
        cy.get('#catalog-link').click();
        cy.url().should('include', 'catalog');
        cy.get('#catalog-link').should('have.class', 'sidenav__link--active');
    });
    
    
});