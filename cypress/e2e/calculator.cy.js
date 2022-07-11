/// <reference types="cypress" />
let resultado_operacion = 0;

beforeEach("Ingresar a la pagina", ()=>{
  cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
});
describe('Hacer operaciones en la calculadora', () => {
  it('Sumar dos numeros', () => {
    cy.get('#number1Field').type(4);
    cy.get('#number2Field').type(3);
    cy.get('#number1Field').invoke('val').then((numeroA)=>{
      cy.get('#number2Field').invoke('val').then((numeroB)=>{
        resultado_operacion = parseInt(numeroA) + parseInt(numeroB);
      })
    })
    cy.get('#selectOperationDropdown').select('Add');
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').invoke("val").then((resultado)=>{
      expect(parseInt(resultado)).equal(resultado_operacion);
    })
  })
  it('Restar dos numeros', () => {
    cy.get('#number1Field').type(4);
    cy.get('#number2Field').type(3);
    cy.get('#number1Field').invoke('val').then((numeroA)=>{
      cy.get('#number2Field').invoke('val').then((numeroB)=>{
        resultado_operacion = parseInt(numeroA) - parseInt(numeroB);
      })
    })
    cy.get('#selectOperationDropdown').select('Subtract');
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').invoke("val").then((resultado)=>{
      expect(parseInt(resultado)).equal(resultado_operacion);
    })
  })
})