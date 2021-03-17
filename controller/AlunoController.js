class AlunoControler{
    constructor(campos){
        this._campos = campos;
        let $ = document.querySelector.bind(document);
        this._alunoView = new AlunoView($('#js-alunoView'));
        this._boletim = new Boletim();
        this._mensagemView = new MensagemView($('#mensagem'));
        // this._alunoView.update();
    }

    adicionaAluno(aluno){
        const erros = this._validacao(aluno);
        (erros.length<=0)?
        this._boletim.adicionaAluno(aluno)
        :this._mensagemView.update(erros);
        this._alunoView.update(this._boletim);
        this.limpaFormulario();
        console.log(this.calculaNota(aluno));
    }
    calculaNota(aluno){
        let soma = 0;
        aluno.notas.forEach((nota)=>{
             soma += nota;
        })
        const media = (soma / aluno.notas.length);

        if(media>=70) return 'APROVADO'
        if(media<=30 || aluno.frequencia <= 70) return 'REPROVADO'
        if(media<=70 && media>=30) return 'PROVA FINAL'

    }
    _validacao(aluno){
        let erros =[];
        if(aluno.nome.trim() == ''){
            erros.push('Nome inválido');
        }if(aluno.notas.length>0){  
            aluno.notas.forEach(element => {
                if(!element){
                    erros.push('iforme somente números')
                    return;
                }
                    
                    
            });
        }if(aluno.notas.length==0){
            console.log('Informe as duas notas')
        }if(aluno.frequencia > 100||aluno.frequencia <1||
        !aluno.frequencia){
            erros.push('Frequencia Inválida');
        }
        return erros;
    }
    limpaFormulario(){
        this._campos.nome.value = '';
        this._campos.nota1.value = '';
        this._campos.nota2.value = '';
        this._campos.frequencia.value = '';
    }

}