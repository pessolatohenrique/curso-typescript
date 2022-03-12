export class NegociacaoLista {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        console.log("Lista de negociações:", this.negociacoes);
    }
}
