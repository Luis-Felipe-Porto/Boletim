class AlunoView{

    constructor(elemento){
        this._elemento= elemento;
    }
    _template(boletim){
        return `<table >
        <thead>
            <th>Nome</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Frequência</th>
            <th>Final</th>
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
                    <td>${aluno.situacao}</td>
                   
                </tr>
            `
            ).join('')}
           
        </tbody>
    </table>`;
    }
    update(boletim){
        this._elemento.innerHTML = this._template(boletim);
    }
}