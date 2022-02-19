import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
import { MensagemView } from "../views/MensagemView.js";
import { DiaSemana } from "../enums/DiaSemana.js";
import { escreveLog } from "../decorators/logs.js";

const negociacoes = new NegociacaoLista();
const negociacoesView = new NegociacaoView("#negociacoesView", true);
const mensagemView = new MensagemView("#mensagemView");

export class NegociacaoController {
  private _data: HTMLInputElement;
  private _quantidade: HTMLInputElement;
  private _valor: HTMLInputElement;

  constructor() {
    this._data = document.querySelector("#data") as HTMLInputElement;
    this._quantidade = document.querySelector(
      "#quantidade"
    ) as HTMLInputElement;
    this._valor = document.querySelector("#valor") as HTMLInputElement;
    negociacoesView.update(negociacoes);
  }

  @escreveLog(true)
  adiciona(): void {
    const negociacao = Negociacao.cria(
      this._data.value,
      this._quantidade.value,
      this._valor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      mensagemView.update("Só é permitido negociar em dias úteis");
      return;
    }

    negociacoes.adiciona(negociacao);
    this.atualizaView();
  }

  ehDiaUtil(data: Date): boolean {
    return (
      data.getDay() > DiaSemana.DOMINGO && data.getDay() < DiaSemana.SABADO
    );
  }

  @escreveLog()
  private atualizaView(): void {
    negociacoesView.update(negociacoes);
    mensagemView.update("Salvo com sucesso!");
  }
}
