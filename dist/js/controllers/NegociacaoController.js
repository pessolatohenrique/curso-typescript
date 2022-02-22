var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
import { MensagemView } from "../views/MensagemView.js";
import { DiaSemana } from "../enums/DiaSemana.js";
import { escreveLog } from "../decorators/logs.js";
import { describe } from "../decorators/describe.js";
import { domInjector } from "../decorators/dom-injector.js";
const negociacoes = new NegociacaoLista();
const negociacoesView = new NegociacaoView("#negociacoesView");
const mensagemView = new MensagemView("#mensagemView");
export class NegociacaoController {
    constructor() {
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
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "_data", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "_quantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "_valor", void 0);
__decorate([
    describe(),
    escreveLog(true)
], NegociacaoController.prototype, "adiciona", null);
__decorate([
    escreveLog()
], NegociacaoController.prototype, "atualizaView", null);
