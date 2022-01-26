import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
const negociacoes = new NegociacaoLista();
const negociacoesView = new NegociacaoView("#negociacoesView");
export class NegociacaoController {
    constructor() {
        this._data = document.querySelector("#data");
        this._quantidade = document.querySelector("#quantidade");
        this._valor = document.querySelector("#valor");
        negociacoesView.update(negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        negociacoes.adiciona(negociacao);
        console.log("Lista de negociações: ", negociacoes.lista());
        negociacoesView.update(negociacoes);
    }
    criaNegociacao() {
        const dataFormatada = this._data.value.replace(/-/g, ",");
        const data = new Date(dataFormatada);
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        return new Negociacao(data, quantidade, valor);
    }
}
