import { NegociacaoLista } from "../models/NegociacaoLista";
import { Negociacao } from "../models/Negociacao.js";
import { INegociacao } from "../interfaces/INegociacao.js";

export class NegociacoesService {
  obtemNegociacoes(): Promise<Array<Negociacao>> {
    return fetch("http://localhost:8080/dados")
      .then((dados) => dados.json())
      .then((dadosFinal: Array<INegociacao>) => {
        return dadosFinal.map((dado) => {
          const negociacao = new Negociacao(
            new Date(),
            dado.montante,
            dado.vezes
          );
          return negociacao;
        });
      });
  }
}
