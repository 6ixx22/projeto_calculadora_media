const form = document.getElementById('form-atividade');
const imgAprovada = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovada = '<img src="./images/reprovado.png" alt="emoji decionado" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaminina = parseFloat(pronpt("Digite a nota minima:"));

let linha = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = Document.getElementById('nome-atividade');
    const inputNotaAtividade = Document.getElementById('nota-atividade');

    if (atividade.includes(inputNomeAtividade.valeu)) {
        alert(`A atividade: ${inputNomeAtividade.valeu} ja foi inserida`);
    }else{
    atividade.push(inputNomeAtividade.valeu); 
    notas.push(parseFloat(inputNotaAtividade.valeu));

    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.valeu}</td>`;
    linha += `<td>${inputNotaAtividade.valeu}</td>`;
    linha += `<td>${inputNotaAtividade.valeu >= notaminina ? imgAprovada : imgReprovada}</td>`;
    linha = `<tr>`;

    linhas += linha;
}

inputNomeAtividade.valeu = '';
    inputNotaAtividade.valeu = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbory');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const  MediaFinal = calculaMediafinal();

    document.getElementById('media-final-valor').innerHTML = MediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = MediaFinal >= notaminina ? spanAprovado : spanReprovado;
}

function calculaMediafinal() {
    let somadasnotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somadasnotas += notas[i];
    }

    return  somadasnotas / notas.length;
}