export class GeradorLog {
    static imprimir(...objects) {
        for (const iterator of objects) {
            iterator.paraTexto();
        }
    }
}
