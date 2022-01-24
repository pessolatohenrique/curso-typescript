export class Negociacao {
  constructor(
    public readonly _data: Date,
    public readonly _valor: number,
    public readonly _quantidade: number
  ) {}

  get volume() {
    return this._quantidade * this._valor;
  }
}
