import { NegociacaoController } from "./controllers/NegociacaoController.js";

const formulario = document.querySelector(".form");
const negociacao = new NegociacaoController();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  negociacao.adiciona();
});
