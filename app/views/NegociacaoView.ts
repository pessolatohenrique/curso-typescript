export class NegociacaoView {
  private elemento: HTMLElement;

  constructor(elemento: string) {
    this.elemento = document.querySelector(elemento);
  }

  template(): string {
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

          </tbody>
        </table>
      `;
  }

  update(): void {
    this.elemento.innerHTML = this.template();
  }
}
