/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

describe('Funcionalidade: Casdastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it('Deve fazer cadastro com sucesso', () => {

        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        

        cy.get('[name="email"]').type(email)
        cy.get('.register > :nth-child(2) > [name="password"]').type('chama123')
        cy.get('[name="register"]').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nome)
        cy.get('[name="account_last_name"]').type(sobrenome)
        cy.get('[name="save_account_details"]').click()
        cy.get('.woocommerce-message').should('exist')
        
    });

});