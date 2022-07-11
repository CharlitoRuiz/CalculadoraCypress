/// <reference types="cypress" />
let resultado_operacion = 0;

class CalculadoraPage {
  getNumero1() {
    return cy.get('#number1Field');
  }

  getNumero2() {
    return cy.get('#number2Field');
  }

  getOperacion(){
    return cy.get('#selectOperationDropdown');
  }

  getBtnCalcular() {
    return cy.get('#calculateButton');
  }

  getResultado(){
    return cy.get('#numberAnswerField');
  }

  ingresarNumeros(numeroA, numeroB) {
    this.getNumero1().type(numeroA);
    this.getNumero2().type(numeroB);
    return this;
  }

  seleccionarOperacion(operacion) {
    this.getOperacion().select(operacion);
    return this;
  }

  clickBtnCalcular() {
    this.getBtnCalcular().click();
    return this;
  }
}

export default CalculadoraPage;
