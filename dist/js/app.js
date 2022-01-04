import { Negociacao } from "./models/Negociacao.js";

const negociacao = new Negociacao(new Date(), 100, 5);

console.log("Dados da negociação: ", negociacao);
console.log("Total da negociação: ", negociacao.volume);
