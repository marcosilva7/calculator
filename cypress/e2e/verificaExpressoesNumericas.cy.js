describe('Verifica expressões numéricas', () => {
    beforeEach(() => {
        cy.visit('../public/index.html');
    });
    it('Verifica soma', () => {

        cy.get('.btn-1').click();
        cy.get('.btn-more').click();
        cy.get('.btn-2').click();
        cy.get('.btn-result').click();
        cy.get('#display').should('have.value', '3');
    });

    it('Verifica subtração', () => {

        cy.get('.btn-2').click();
        cy.get('.btn-less').click();
        cy.get('.btn-1').click();
        cy.get('.btn-result').click();
        cy.get('#display').should('have.value', '1');
    });
    it('Verifica multiplicação', () => {

        cy.get('.btn-9').click();
        cy.get('.btn-multiplication').click();
        cy.get('.btn-9').click();
        cy.get('.btn-result').click();
        cy.get('#display').should('have.value', '81');
    });
    it('Verifica divisão', () => {

        cy.get('.btn-9').click();
        cy.get('.btn-bar').click();
        cy.get('.btn-3').click();
        cy.get('.btn-result').click();
        cy.get('#display').should('have.value', '3');
    });
});