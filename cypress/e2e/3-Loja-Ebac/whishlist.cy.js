/// <reference types="cypress"/>

describe('Funcionalidade: Wishlist', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve verificar se o produto foi para Wishlist', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(' .product-block >')
           .first()
            .click()
        cy.get('.summary > .yith-wcwl-add-to-wishlist > .yith-wcwl-add-button').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .text-skin > .fa').click()
        
        cy.get('h2').should('exist')
    });
    
});