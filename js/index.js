var currentNumberWrapper1_1 = document.getElementById('currentNumber1-1');
var currentNumber1_1 = 0;

var adicionar1_1 = document.getElementById('adicionar1-1');
var subtrair1_1 = document.getElementById('subtrair1-1');

adicionar1_1.addEventListener('click', increment1_1, true);
subtrair1_1.addEventListener('click', decrement1_1, false);

function decrement1_1() {
  currentNumber1_1--;
  currentNumberWrapper1_1.innerHTML = currentNumber1_1;
}

function increment1_1() {
  currentNumber1_1++;
  currentNumberWrapper1_1.innerHTML = currentNumber1_1;
}
/**############################################################ */

var currentNumberWrapper1_2 = document.getElementById('currentNumber1-2');
var currentNumber1_2 = 0;

var adicionar1_2 = document.getElementById('adicionar1-2');
var subtrair1_2 = document.getElementById('subtrair1-2');
subtrair1_2.style.display = 'none';

adicionar1_2.addEventListener('click', increment1_2, true);
subtrair1_2.addEventListener('click', decrement1_2, false);

function mostrarbotao() {
  if (currentNumber1_2 <= 0) {
    document.getElementById('subtrair1-2').style.display = 'none';
  } else {
    document.getElementById('subtrair1-2').style.display = 'inline';
  }
}

function decrement1_2() {
  currentNumber1_2--;
  currentNumberWrapper1_2.innerHTML = currentNumber1_2;
  mostrarbotao();
}

function increment1_2() {
  currentNumber1_2++;
  currentNumberWrapper1_2.innerHTML = currentNumber1_2;
  mostrarbotao();
}

/**############################################################ */

var currentNumberWrapper1_3 = document.getElementById('currentNumber1-3');
var currentNumber1_3 = 0;

var adicionar1_3 = document.getElementById('adicionar1-3');
var subtrair1_3 = document.getElementById('subtrair1-3');

adicionar1_3.addEventListener('click', increment1_3, true);
subtrair1_3.addEventListener('click', decrement1_3, false);

function trocarCor() {
  if (currentNumber1_3 < 0) {
    currentNumberWrapper1_3.style.color = '#ff0000';
  } else if (currentNumber1_3 === 0) {
    currentNumberWrapper1_3.style.color = '#000000';
  } else {
    currentNumberWrapper1_3.style.color = '#0000ff';
  }
}

function decrement1_3() {
  currentNumber1_3--;
  currentNumberWrapper1_3.innerHTML = currentNumber1_3;
  trocarCor();
}

function increment1_3() {
  currentNumber1_3++;
  currentNumberWrapper1_3.innerHTML = currentNumber1_3;
  trocarCor();
}

/**############################################################ */

var numeroAtualEmTela2_1 = document.getElementById('currentNumber2-1');
var numeroAtual2_1 = 0;

var botaoAumentar2_1 = document.getElementById('adicionar2-1');
var botaoDiminuir2_1 = document.getElementById('subtrair2-1');

function aumentar2_1() {
  numeroAtual2_1++;
  numeroAtualEmTela2_1.innerHTML = numeroAtual2_1;
}

function diminuir2_1() {
  numeroAtual2_1--;
  numeroAtualEmTela2_1.innerHTML = numeroAtual2_1;
}

/**##################################################################### */

var numeroAtualEmTela2_2 = document.getElementById('currentNumber2-2');
var numeroAtual2_2 = 0;

var botaoAumentar2_2 = document.getElementById('adicionar2-2');
var botaoDiminuir2_2 = document.getElementById('subtrair2-2');

botaoDiminuir2_2.style.display = 'none';

function mostrarbotao() {
  if (numeroAtual2_2 <= 0) {
    document.getElementById('subtrair2-2').style.display = 'none';
  } else {
    document.getElementById('subtrair2-2').style.display = 'inline';
  }
}

function aumentar2_2() {
  numeroAtual2_2++;
  numeroAtualEmTela2_2.innerHTML = numeroAtual2_2;
  mostrarbotao();
}

function diminuir2_2() {
  numeroAtual2_2--;
  numeroAtualEmTela2_2.innerHTML = numeroAtual2_2;
  mostrarbotao();
}

/**####################################################### */

var numeroAtualEmTela2_3 = document.getElementById('currentNumber2-3');
var numeroAtual2_3 = 0;

var botaoAumentar2_3 = document.getElementById('adicionar2-3');
var botaoDiminuir2_3 = document.getElementById('subtrair2-3');

function trocarACor() {
  if (numeroAtual2_3 < 0) {
    numeroAtualEmTela2_3.style.color = '#ff0000';
  } else if (numeroAtual2_3 === 0) {
    numeroAtualEmTela2_3.style.color = '#000000';
  } else {
    numeroAtualEmTela2_3.style.color = '#0000ff';
  }
}

function aumentar2_3() {
  numeroAtual2_3++;
  numeroAtualEmTela2_3.innerHTML = numeroAtual2_3;
  trocarACor();
}

function diminuir2_3() {
  numeroAtual2_3--;
  numeroAtualEmTela2_3.innerHTML = numeroAtual2_3;
  trocarACor();
}
