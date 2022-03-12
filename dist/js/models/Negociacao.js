export class Negociacao {
    constructor(_data, _valor, _quantidade) {
        this._data = _data;
        this._valor = _valor;
        this._quantidade = _quantidade;
        this._data = _data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        const newDate = new Date(this._data.getTime());
        return newDate;
    }
    static cria(dataAntes, quantidadeAntes, valorAntes) {
        const dataFormatada = dataAntes.replace(/-/g, ",");
        const data = new Date(dataFormatada);
        const quantidade = parseInt(quantidadeAntes);
        const valor = parseFloat(valorAntes);
        return new Negociacao(data, quantidade, valor);
    }
    paraTexto() {
        console.log(`**Dados da negociação**: 
      Data: ${this._data}
      Quantidade: ${this._quantidade}
      Valor: ${this._valor}
    `);
    }
}
