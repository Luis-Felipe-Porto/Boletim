class Boletim{

    constructor(){
        this._alunos = [];
    }
    adicionaAluno(aluno){
        this._alunos.push(aluno);
    }
    deleteAluno(aluno){
        this._alunos.findIndex(aluno);
    }
    get alunos(){
        return [].concat(this._alunos);
    }
    numeroAprovados(){
        let aprovados = 0;
        this._alunos.forEach(aluno=>{
            if(aluno.situacao=='APROVADO') aprovados++;
        })
        return aprovados;
    }
    numeroReprovados(){
        let reprovados = 0;
        this._alunos.forEach(aluno=>{
            if(aluno.situacao=='REPROVADO') reprovados++;
        })
        return reprovados;
    }
    calcularMediaGeralTurma(){
        let somamediaGeral = 0
        this._alunos.forEach(aluno=>{
            somamediaGeral+= aluno.media;
        })
        return  (somamediaGeral/this._alunos.length)?(somamediaGeral/this._alunos.length):0;
    }
}