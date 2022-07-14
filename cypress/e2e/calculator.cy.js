/// <reference types="cypress" />
import calculadoraPage from '../page-objects/calculadora.page'
import datos from '../fixtures/datos.json'

let numeroA = datos.numero1, numeroB = datos.numero2, operacion = datos.operacion, resultado_operacion, numeroAI = datos.numeroAI, numeroBI = datos.numeroBI;
const calculadora = new calculadoraPage();

beforeEach("Ingresar a la pagina", ()=>{
  cy.visit('/BasicCalculator.html');
  //calculadora.ingresarNumeros(numeroA, numeroB); 
});

afterEach("Validar el resultado", ()=>{
  calculadora.getResultado().should('have.value', resultado_operacion);
});

describe('Hacer operaciones en la calculadora', () => {
  it('Hacer las operaciones completas', () => {
    operacion.forEach(element => {
      calculadora.seleccionarOperacion(element)
      calculadora.clickBtnCalcular();
      switch (element) {
        case "Add":
          resultado_operacion = numeroA + numeroB;
          break;
        case "Subtract":
          resultado_operacion = numeroA - numeroB;
          break;
        case "Multiply":
          resultado_operacion = numeroA * numeroB;
          break;      
        case "Divide":
          resultado_operacion = numeroA / numeroB;
          break;
        case "Concatenate":
            resultado_operacion = numeroA.toString() + numeroB.toString();
            break;
        default:alert("Operacion no valida");
          break;
          
      }
      calculadora.getResultado().should('have.value', resultado_operacion);
    });

  })
  it('Sumar dos numeros', () => {
    calculadora.seleccionarOperacion('Add')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA + numeroB;
  })
  it('Restar dos numeros', () => {
    calculadora.seleccionarOperacion('Subtract')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA - numeroB;
  })
  it('Multiplicar dos numeros', () => {
    calculadora.seleccionarOperacion('Multiply')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA * numeroB;
  })
  it('Dividir dos numeros', () => {
    calculadora.seleccionarOperacion('Divide')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA / numeroB;
  })
  it('Concatenar dos numeros', () => {
    calculadora.seleccionarOperacion('Concatenate')
    calculadora.clickBtnCalcular();
    resultado_operacion = numeroA.toString() + numeroB.toString();
  })
})

it.only('Hacer las operaciones completas iterando numeros', () => {
  numeroAI.forEach(num1 => {
    calculadora.ingresarNumero1(num1);
    numeroBI.forEach(num2 => {
      calculadora.ingresarNumero2(num2); 
      operacion.forEach(element => {
        calculadora.seleccionarOperacion(element)
        calculadora.clickBtnCalcular();
        switch (element) {
          case "Add":
            resultado_operacion = num1 + num2;
            break;
          case "Subtract":
            resultado_operacion = num1 - num2;
            break;
          case "Multiply":
            resultado_operacion = num1 * num2;
            break;      
          case "Divide":
            resultado_operacion = num1 / num2;
            break;
          case "Concatenate":
              resultado_operacion = num1.toString() + num2.toString();
              break;
          default:alert("Operacion no valida");
            break;
            
        }
        calculadora.getResultado().should('have.value', resultado_operacion);
      });
    });
  });
});