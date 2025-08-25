/// <reference types="cypress"/>

describe('Funcionalidade: login' , ()  => {

    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('[name="username"]').type('gutss2caska@falconia.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('gutsamacaska')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gutss2caska (não é gutss2caska? Sair)')

    })

})