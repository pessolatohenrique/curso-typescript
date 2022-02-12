import { NegociacaoController } from "./controllers/NegociacaoController.js";
const formulario = document.querySelector(".form");
const negociacao = new NegociacaoController();
if (!formulario) {
    throw new Error("Seletor do formulário não foi encontrado!");
}
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    negociacao.adiciona();
});
