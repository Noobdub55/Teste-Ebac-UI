/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: login' , ()  => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso' , () => {
        cy.get('[name="username"]').type('gutss2caska@falconia.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('gutsamacaska')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gutss2caska (não é gutss2caska? Sair)')

    })

    it('Deve exibir uma mensagem erro ao inserir usuário inválido', () => {
        cy.get('[name="username"]').type('griffiths2caska@falconia.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('gutsamacaska')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('[name="username"]').type('gutss2caska@falconia.com')
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('griffithamacaska')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')

    });

    it('Deve fazer login com sucesso - massa de dados', () => {
        
        cy.get('[name="username"]').type(perfil.usuario)
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    });

    it.only('Dever fazer login com sucesso - usando fixeture', () => {
        cy.fixture('perfil').then(dados =>{
        cy.get('[name="username"]').type(dados.usuario , { log:false })
        cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(dados.senha , { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        })
        
    });

})