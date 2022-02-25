import { Negociacao } from "../models/Negociacao.js";
export class NegociacoesService {
    obtemNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((dados) => dados.json())
            .then((dadosFinal) => {
            return dadosFinal.map((dado) => {
                const negociacao = new Negociacao(new Date(), dado.montante, dado.vezes);
                return negociacao;
            });
        });
    }
}
