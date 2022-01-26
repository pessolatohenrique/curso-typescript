import { NegociacaoLista } from "../models/NegociacaoLista";

export class NegociacaoView {
  private elemento: HTMLElement;

  constructor(elemento: string) {
    this.elemento = document.querySelector(elemento);
  }

  template(model: NegociacaoLista): string {
    return `
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Data</th>
              <th>Quantidade</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            ${model.lista().map((item) => {
              return `<tr>
                  <td>${Intl.DateTimeFormat().format(item.data)}</td>
                  <td>${item._quantidade}</td>
                  <td>${item._valor}</td>
                </tr>`;
            })}
          </tbody>
        </table>
      `;
  }

  update(model: NegociacaoLista): void {
    this.elemento.innerHTML = this.template(model);
  }
}
