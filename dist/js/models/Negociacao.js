export class Negociacao {
  #data;
  #valor;
  #quantidade;

  constructor(data, valor, quantidade) {
    this.#data = data;
    this.#valor = valor;
    this.#quantidade = quantidade;
  }

  get data() {
    return this.#data;
  }

  get valor() {
    return this.#valor;
  }

  get quantidade() {
    return this.#quantidade;
  }

  get volume() {
    return this.#quantidade * this.#valor;
  }
}
