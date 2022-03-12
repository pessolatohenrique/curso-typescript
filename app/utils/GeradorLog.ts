export class GeradorLog {
  public static imprimir(...objects: any): void {
    for (const iterator of objects) {
      iterator.paraTexto();
    }
  }
}
