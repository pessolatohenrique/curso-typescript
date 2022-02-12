export abstract class View<T> {
  private elemento: HTMLElement;
  private ativarEscape = false;

  constructor(elemento: string, ativarEscape?: boolean) {
    this.elemento = document.querySelector(elemento) as HTMLInputElement;
    this.ativarEscape = ativarEscape as boolean;
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);

    if (this.ativarEscape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    this.elemento.innerHTML = template;
  }
}
