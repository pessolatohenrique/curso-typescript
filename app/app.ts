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

const btnImportar = document.querySelector(".btn-importar");

if (!btnImportar) {
  throw new Error("Seletor de botão não foi encontrado");
}

btnImportar.addEventListener("click", function () {
  negociacao.importa();
});
