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
}