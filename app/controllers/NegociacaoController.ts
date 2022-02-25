import { Negociacao } from "../models/Negociacao.js";
import { NegociacaoLista } from "../models/NegociacaoLista.js";
import { NegociacaoView } from "../views/NegociacaoView.js";
import { MensagemView } from "../views/MensagemView.js";
import { DiaSemana } from "../enums/DiaSemana.js";
import { escreveLog } from "../decorators/logs.js";
import { describe } from "../decorators/describe.js";
import { domInjector } from "../decorators/dom-injector.js";
import { INegociacao } from "../interfaces/INegociacao.js";

const negociacoes = new NegociacaoLista();
const negociacoesView = new NegociacaoView("#negociacoesView");
const mensagemView = new MensagemView("#mensagemView");

export class NegociacaoController {
  @domInjector("#data")
  private _data: HTMLInputElement;
  @domInjector("#quantidade")
  private _quantidade: HTMLInputElement;
  @domInjector("#valor")
  private _valor: HTMLInputElement;

  constructor() {
    negociacoesView.update(negociacoes);
  }

  @describe()
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

  importa(): void {
    fetch("http://localhost:8080/dados")
      .then((dados) => dados.json())
      .then((dadosFinal: Array<INegociacao>) =>
        dadosFinal.map((dado) => {
          const novoDado = { ...dado, data: new Date() };
          return novoDado;
        })
      )
      .then((dadosMapeados) => {
        for (const iterator of dadosMapeados) {
          const negociacao = new Negociacao(
            iterator.data,
            iterator.montante,
            iterator.vezes
          );
          negociacoes.adiciona(negociacao);
          this.atualizaView();
        }
      });
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
