export class NegociacaoLista {
    constructor() {
        this.negociacoes = [];
    }
    // ou private negociacoes: Negociacao[] = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
