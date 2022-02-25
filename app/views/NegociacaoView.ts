import { NegociacaoLista } from "../models/NegociacaoLista";
import { View } from "./View.js";
import { escape } from "../decorators/escape.js";

export class NegociacaoView extends View<NegociacaoLista> {
  @escape()
  protected template(model: NegociacaoLista): string {
    return `<script>console.log</script>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Data</th>
              <th>Quantidade</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            ${model
              .lista()
              .map((item) => {
                return `<tr>
                  <td>${this.formataData(item.data)}</td>
                  <td>${item._quantidade}</td>
                  <td>${item._valor}</td>
                </tr>`;
              })
              .join("")}
          </tbody>
        </table>`;
  }

  private formataData(data: Date): string {
    return Intl.DateTimeFormat().format(data);
  }
}
