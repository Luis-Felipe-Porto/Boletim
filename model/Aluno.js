class Aluno{
    
    constructor(nome,notas,frequencia,provafinal=0.0){
        this._nome = nome;
        this._notas = notas;
        this._frequencia =frequencia;
        this._provafinal = provafinal;
        this._situacao;
        //Object.freeze(this);
    }
    get nome(){
        return this._nome;
    }
    get notas(){
        return this._notas;
    }
    get frequencia(){
        return this._frequencia;
    }
    get provafinal(){
        return this._provafinal;
    }
    get situacao(){
        return this._situacao;
    }
    set situacao(value){
        this._situacao = value;
    }
    

}