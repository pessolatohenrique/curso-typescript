import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
import { MensagemView } from "../views/MensagemView.js";
import { DiaSemana } from "../enums/DiaSemana.js";
const negociacoes = new NegociacaoLista();
const negociacoesView = new NegociacaoView("#negociacoesView");
const mensagemView = new MensagemView("#mensagemView");
export class NegociacaoController {
    constructor() {
        this._data = document.querySelector("#data");
        this._quantidade = document.querySelector("#quantidade");
        this._valor = document.querySelector("#valor");
        negociacoesView.update(negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            mensagemView.update("Só é permitido negociar em dias úteis");
            return;
        }
        negociacoes.adiciona(negociacao);
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return (data.getDay() > DiaSemana.DOMINGO && data.getDay() < DiaSemana.SABADO);
    }
    criaNegociacao() {
        const dataFormatada = this._data.value.replace(/-/g, ",");
        const data = new Date(dataFormatada);
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);
        return new Negociacao(data, quantidade, valor);
    }
    atualizaView() {
        negociacoesView.update(negociacoes);
        mensagemView.update("Salvo com sucesso!");
    }
}
