// Saldos positivos --> DADOS FICTÍCIOS
const salario = 1089;


// Contas a pagar --> DADOS FICTÍCIOS
let nubankPessoal = 560;
let nubankCompartilhado = 120;
let creditoEspecial = 472;
let pacoteClaroCelular = 50;
let contaEnergia = 100;
let faxina = 150;
let sobrancelhas = 40;
let manicure = 60;
let racao = 40;
let gasolina = 75;


// Array com a lista de contas a pagar
let contasApagar = [
    nubankPessoal,
    nubankCompartilhado,
    creditoEspecial,
    pacoteClaroCelular,
    contaEnergia,
    faxina,
    sobrancelhas,
    manicure,
    racao,
    gasolina
  ]


  // Função que soma todas as contas na lista
  function totalContas() {
      let totalContas = contasApagar.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

      return totalContas;
  }

  // Cálculo que subtraí o salário  - contas a pagar, e retorna o resultado
  function calcSalarioMenosContas() {
      let resultado = salario - totalContas();
      
      if (resultado === 0 || (Math.sign(resultado)) === -1) {
            console.log(`Que pena, esse mês não sobrou dindin a mais pra você :(..\n
                  O valor total subtraído do seu salário menos suas contas ficou em: ` + resultado)
      } else {
            console.log(`Legal! Sobrou uma graninha esse mês! 
            O valor total subtraído do seu salário menos suas contas ficou em: ` + resultado)
      }
  }


  // Chamando a função com resultado
  console.log(calcSalarioMenosContas());

