class AlunoView{

    constructor(elemento){
        this._elemento= elemento;
    }
    _template(boletim){
        return `<table class="table table-striped table-hover">
        <thead>
            <th>Nome</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Frequência</th>
            <th>Final</th>
            <th>Media</th>
            <th>Situação</th>
            
        </thead>
        <tbody>
            ${boletim.alunos.map((aluno)=>`
                <tr>
                    <td>${aluno.nome}</td>
                    <td>${aluno.notas[0]}</td>
                    <td>${aluno.notas[1]}</td>
                    <td>${aluno.frequencia+' %'}</td>
                    <td>${aluno.provafinal == null?'--':aluno.provafinal}</td>
                    <td>${aluno.media}</td>
                    <td class="${aluno.situacao == 'APROVADO'?'table-success':'table-danger'}">${aluno.situacao}</td>
                   
                </tr>
            `
            ).join('')}
           
        </tbody>
        <tfooter>

            <tr>
                <td>Aprovados</td>
                <td>${boletim.numeroAprovados()}</td>
                <td>Reprovados</td>
                <td>${boletim.numeroReprovados()}</td>
                <td colspan="2">Media Geral</td>
                <td>${boletim.calcularMediaGeralTurma().toFixed(2)}</td>
            </tr> 
        </tfooter>
    </table>`;
    }
    update(boletim){
        this._elemento.innerHTML = this._template(boletim);
    }
}