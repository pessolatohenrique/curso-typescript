import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
import { MensagemView } from "../views/MensagemView.js";
import { DiaSemana } from "../enums/DiaSemana.js";
const negociacoes = new NegociacaoLista();
const negociacoesView = new NegociacaoView("#negociacoesView", true);
const mensagemView = new MensagemView("#mensagemView");
export class NegociacaoController {
    constructor() {
        this._data = document.querySelector("#data");
        this._quantidade = document.querySelector("#quantidade");
        this._valor = document.querySelector("#valor");
        negociacoesView.update(negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.cria(this._data.value, this._quantidade.value, this._valor.value);
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
    atualizaView() {
        negociacoesView.update(negociacoes);
        mensagemView.update("Salvo com sucesso!");
    }
}
