// ***************   TODOS OS CONSOLE.LOG DESSE CODIGO ESTAO COMENTADOS **********

const query = document.querySelector.bind(document);

// exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    //console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    //console.log(elseScope);
  }
  //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
};
testingScope(true);

// exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => {
  return a - b;
});
//console.log(oddsAndEvens);

// exercicio 3
const fatorial = (numero) => {
  if (numero < 0) return false;
  return numero === 0 ? 1 : numero * fatorial(numero - 1);
};
//console.log(fatorial(5));

let clickCount = 0;
query('#addClicks').addEventListener('click', () => {
  clickCount += 1;
  query('#showClicks').innerText = `${clickCount}`;
});
