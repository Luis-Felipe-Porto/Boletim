class MensagemView{

    constructor(elemento){
        this._elemento = elemento;
    }
    _template(erros){
        return `
            <div class="row justify-content-center" >
                <div class="col-6 ${erros.length>0?'alert alert-warning':''}" role="alert">
                    ${erros.map((erro)=>erro).join('</br>')}
                </div>
            </div>
        `;
    }
    update(erros){
        this._elemento.innerHTML = this._template(erros);
    }
}