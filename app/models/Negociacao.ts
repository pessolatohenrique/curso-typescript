export class Negociacao {
  constructor(
    private _data: Date,
    public readonly _valor: number,
    public readonly _quantidade: number
  ) {
    this._data = _data;
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data(): Date {
    const newDate = new Date(this._data.getTime());
    return newDate;
  }
}
