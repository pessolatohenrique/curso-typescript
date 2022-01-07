import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoController {
  private _data;
  private _quantidade;
  private _valor;

  constructor() {
    this._data = document.querySelector("#data");
    this._quantidade = document.querySelector("#quantidade");
    this._valor = document.querySelector("#valor");
  }

  adiciona() {
    const negociacao = new Negociacao(
      this._data.value,
      this._quantidade.value,
      this._valor.value
    );
    console.log("Campos: ", negociacao);
  }
}
