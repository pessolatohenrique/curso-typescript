import { Negociacao } from "./Negociacao.js";
import { Imprimivel } from "../interfaces/Imprimivel.js";

export class NegociacaoLista implements Imprimivel {
  private negociacoes: Array<Negociacao> = [];
  // ou private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }

  paraTexto(): void {
    console.log("Lista de negociações:", this.negociacoes);
  }
}
