export class View {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
