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
}
