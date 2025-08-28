/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('deve selecionar produto da lista', () => {
        cy.get(' .product-block')
          // .first()
           // .last()
            // .eq(4)
             .contains('Ariel Roll Sleeve Sweatshirt')
              .click()

                cy.get('#tab-title-description > a').should('exist')
    });
    
});