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

        cy.preCadastro(faker.internet.email(), 'gutsamacaska', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('exist')
        
    });

});