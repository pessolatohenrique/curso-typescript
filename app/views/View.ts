export abstract class View<T> {
  private elemento: HTMLElement;

  constructor(elemento: string) {
    this.elemento = document.querySelector(elemento);
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }
}
