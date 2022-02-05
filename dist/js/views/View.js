export class View {
    constructor(elemento, ativarEscape) {
        this.ativarEscape = false;
        this.elemento = document.querySelector(elemento);
        this.ativarEscape = ativarEscape;
    }
    update(model) {
        let template = this.template(model);
        if (this.ativarEscape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
