/// <reference types="cypress" />
import calculadoraPage from '../page-objects/calculadora.page'
import datos from '../fixtures/datos.json'

let numeroA = datos.numero1, numeroB = datos.numero2, resultado_operacion = 0;
const calculadora = new calculadoraPage();

beforeEach("Ingresar a la pagina", ()=>{
  cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
});
describe.only('Hacer operaciones en la calculadora', () => {
  it('Sumar dos numeros', () => {
    calculadora.ingresarNumeros(numeroA, numeroB); 
    calculadora.seleccionarOperacion('Add')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA + numeroB;
    calculadora.getResultado().should('have.value', resultado_operacion);
  })
  it('Restar dos numeros', () => {
    calculadora.ingresarNumeros(numeroA, numeroB); 
    calculadora.seleccionarOperacion('Subtract')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA - numeroB;
    calculadora.getResultado().should('have.value', resultado_operacion);
  })
  it('Multiplicar dos numeros', () => {
    calculadora.ingresarNumeros(numeroA, numeroB); 
    calculadora.seleccionarOperacion('Multiply')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA * numeroB;
    calculadora.getResultado().should('have.value', resultado_operacion);
  })
  it('Dividir dos numeros', () => {
    calculadora.ingresarNumeros(numeroA, numeroB); 
    calculadora.seleccionarOperacion('Divide')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA / numeroB;
    calculadora.getResultado().should('have.value', resultado_operacion);
  })
})