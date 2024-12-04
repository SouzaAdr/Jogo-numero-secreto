let ListaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function ExibirMensagemInicial(){
ExibirTextoNaTela('h1', 'jogo do numero secreto');
ExibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

 ExibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        ExibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' ; 
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa} !`;
        ExibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //acionar botão novo jogo ao acertar,e remover a trava disabled do html 
    } else { // '>' chute maior
        if (chute > numeroSecreto) {
            ExibirTextoNaTela('p', 'O número secreto é menor');
        }

        else {
            ExibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        LimparCampo();
    }

}

function GerarNumeroAleatorio() {
let NumeroEscolhido=parseInt(Math.random() * NumeroLimite + 1);
let QuantidaDeElementosNaLista = ListaDeNumerosSorteados.length;

if(QuantidaDeElementosNaLista =NumeroLimite){
ListaDeNumerosSorteados = [];
}

if (ListaDeNumerosSorteados.includes(NumeroEscolhido)){
    return GerarNumeroAleatorio ()
}  else {
    ListaDeNumerosSorteados.push(NumeroEscolhido)
    console.log (ListaDeNumerosSorteados);
    return NumeroEscolhido;
}

}

function LimparCampo() {
    chute = document.querySelector('input'); 
    chute.value = ''; //sem valor nos '' para limpar o campo de digitação!
}

function ReiniciarJogo() {
    numeroSecreto = GerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true); // Ativa o novo jogo somente depois de acertar!

}