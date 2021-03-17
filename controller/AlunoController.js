class AlunoControler{
    constructor(campos){
        this._campos = campos;
        let $ = document.querySelector.bind(document);
        this._alunoView = new AlunoView($('#js-alunoView'));
        this._boletim = new Boletim();
        this._mensagemView = new MensagemView($('#mensagem'));
    }

    adicionaAluno(aluno){
        const erros = this._validacao(aluno);
        (erros.length<=0)?
        this._boletim.adicionaAluno(aluno)
        :this._mensagemView.update(erros);  
        this.limpaFormulario();
        aluno.situacao = this.situacao(aluno);
        
        if( aluno.situacao == 'PROVA FINAL'){
            aluno.situacao = calcularNotaFinal(aluno)
        }
        this._alunoView.update(this._boletim);    
    }
    situacao(aluno){

        const media = this._calcularMedia(aluno);
        if(media>=70) return 'APROVADO'
        if(media<=30 || aluno.frequencia <= 70) return 'REPROVADO'
        if(media<=70 && media>=30) return 'PROVA FINAL'

    }
    _calcularMedia(aluno){
        let soma = 0;
        aluno.notas.forEach((nota)=>{
             soma += nota;
        })
        return (soma / aluno.notas.length);
    }
    _calcularMediaFinal(aluno){
        let soma = 0;
        aluno.notas.forEach((nota)=>{
             soma += nota;
        })
        return ((soma + aluno.provafinal) / aluno.notas.length + 1);
    }
    calcularNotaFinal(aluno){
       return _calcularMedia(aluno) + _calcularMediaFinal(aluno) < 50 ? 'REPROVADO': 'APROVADO'
    }
    _validacao(aluno){
        let erros =[];
        if(aluno.nome.trim() == ''){
            erros.push('Nome inválido');
        }if(aluno.notas.length>0){  
            aluno.notas.forEach(element => {
                if(!element){
                    erros.push('Iforme somente números para notas')
                }
                if(element>100){
                    erros.push('Nota máxima permitida 100')
                }          
            });
        }if(aluno.notas.length==0){
            console.log('Informe as duas notas')
        }if(aluno.frequencia > 100||aluno.frequencia <1||
        !aluno.frequencia){
            erros.push('Frequencia Inválida');
        }
        if(!aluno.provafinal && aluno.provafinal!==null){
            erros.push('Informe somente numeros em prova final');
        }
        console.log(String(aluno.provafinal));
        return erros;
    }
    limpaFormulario(){
        this._campos.nota1.value = '';
        this._campos.nota2.value = '';
        this._campos.frequencia.value = '';
        this._campos.provafinal.value = '';
    }

}