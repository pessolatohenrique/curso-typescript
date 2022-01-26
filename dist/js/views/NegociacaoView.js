export class NegociacaoView {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    template(model) {
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
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
