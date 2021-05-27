var numero1 = null;
var numero2 = null;
var resultado = null;
var operacao = null;


// CRIAR FUNÇÔES DE SOMA, SUBTRAÇÃO, DIVISÃO E MULTIPLICAÇÃO E AO EFETUAR O CLICK NO BOTÂO DE = EXIBIR O RESULTADO DA OPERAÇÃO


function soma(numero1, numero2) { // FAZER O MESMO PARA AS OUTRA OPERAÇÕES
    return numero1 + numero2;
}

function recuperaOperacao(event, button) {
    // FUNÇÃO RESPONSÁVEL EM SABER QUAL OPERAÇÃO O USUÁRIO QUER FAZER E ACORDO COM O BOTÃO CLICADO (+, -, *, /);  
    operacao = event.taget.value;  
    return;
}

function recuperaNumero(event, button) {
    // FUNÇÃO RESPONSÁVEL EM SABER QUAL O NUMERO E ARMAZENAR NA VARIÁVEL SE É O PRIMEIRO OU O SEGUNDO;  
    if (!numero1) {
        numero1 = event.taget.value;
    } else {
        numero2 = event.taget.value;
    }
    return;
}



function resultado(event) {
    // FAZER A LÓGICA AQUI DE ACORDO COM A OPERAÇÃO ARMAZENADA NA VARIÁVEL OPERACAO E PASSAR COMO PARAMETRO AS VARIAVEIS NUMERO1 E NUMERO2
    /**
     * if (operacao === adicao) {
     * return soma(numero1, numero2);
     * }
     */
}


