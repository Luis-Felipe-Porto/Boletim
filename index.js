let campos  = {
    nome: document.querySelector('#nome'),
    nota1:document.querySelector('#nota1'),
    nota2: document.querySelector('#nota2'),
    frequencia: document.querySelector('#frequencia'),
    provafinal:document.querySelector('#provafinal')
}

const alunoController = new AlunoControler(campos);
    document.querySelector('#cadastro-aluno').addEventListener('submit',function(event){
    event.preventDefault();
    
    const aluno = new Aluno(
        campos.nome.value,
        [parseInt(campos.nota1.value),parseInt(campos.nota2.value)],
        parseInt(campos.frequencia.value),
        campos.provafinal.value.trim() !== ''?parseInt(campos.provafinal.value): null
        );
    alunoController.adicionaAluno(aluno);
    // const tbody = document.querySelector('#js-alunoView table')  
    // const tr = document.createElement('tr');
    // const nAprovados = document.createElement('td');
    // const nReprovados = document.createElement('td');
     

})
