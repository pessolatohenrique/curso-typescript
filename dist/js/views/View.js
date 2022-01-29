export class View {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
