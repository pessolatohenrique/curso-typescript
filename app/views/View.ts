export abstract class View<T> {
  private elemento: HTMLElement;

  constructor(elemento: string) {
    this.elemento = document.querySelector(elemento) as HTMLInputElement;
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
