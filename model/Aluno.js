class Aluno{
    
    constructor(nome,notas,frequencia,provafinal){
        this._nome = nome;
        this._notas = notas;
        this._frequencia =frequencia;
        this._provafinal = provafinal;
        this._media = 0.0;
        Object.freeze(this);
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
    get media(){
        return this._media;
    }
    

}