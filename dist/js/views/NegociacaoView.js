export class NegociacaoView {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    template() {
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
    update() {
        this.elemento.innerHTML = this.template();
    }
}
