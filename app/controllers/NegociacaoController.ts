import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";

const negociacoes = new NegociacaoLista();

export class NegociacaoController {
  private _data: HTMLInputElement;
  private _quantidade: HTMLInputElement;
  private _valor: HTMLInputElement;

  constructor() {
    this._data = document.querySelector("#data");
    this._quantidade = document.querySelector("#quantidade");
    this._valor = document.querySelector("#valor");
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    negociacoes.adiciona(negociacao);
    console.log("Lista de negociações: ", negociacoes.lista());
  }

  criaNegociacao(): Negociacao {
    const dataFormatada = this._data.value.replace(/-/g, ",");
    const data = new Date(dataFormatada);
    const quantidade = parseInt(this._quantidade.value);
    const valor = parseFloat(this._valor.value);

    return new Negociacao(data, quantidade, valor);
  }
}
