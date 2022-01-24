export class Negociacao {
  constructor(
    private _data: Date,
    private _valor: number,
    private _quantidade: number
  ) {}

  get volume() {
    return this._quantidade * this._valor;
  }
}
