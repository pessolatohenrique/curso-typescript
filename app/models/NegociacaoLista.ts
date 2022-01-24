import { Negociacao } from "./Negociacao.js";

export class NegociacaoLista {
  private negociacoes: Array<Negociacao> = [];
  // ou private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}
