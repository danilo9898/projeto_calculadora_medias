const form = document.getElementById('form-atividade');
const imgAprovado = ' <img src="./images/aprovado.png" alt=" emoji celebrando" />'
const imgReprovado = ' <img src="./images/reprovado.png" alt=" emoji celebrando" />'
const Atividades = [];
const Notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota miníma: "));


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabelas();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (Atividades.includes(inputNomeAtividade.value)) {
        alert(`atividade: ${inputNomeAtividade.value} já foi inserido`);
    }else{
        Atividades.push(inputNomeAtividade.value);
        Notas.push(parseFloat(inputNotaAtividade.value));

    Atividades.push(inputNomeAtividade.value);
    Notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += `<tr>`;

    linhas += linha;

    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabelas(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

console.log(calculaMediaFinal);
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < Notas.length; i++) {
        somaDasNotas += Notas[i];
    }

    return somaDasNotas / Notas.length;
}