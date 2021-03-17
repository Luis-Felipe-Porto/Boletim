class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }
    _template(erros){
        return `
            <span>
                ${erros.map((erro)=>erro).join('</br>')}
            </span>
        `;
    }
    update(erros){
        this._elemento.innerHTML = this._template(erros);
    }
}