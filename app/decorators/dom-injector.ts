export function domInjector(seletor: string) {
  return function (target: any, property: string) {
    let elemento: HTMLElement | null = null;

    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
      }
      return elemento;
    };

    Object.defineProperty(target, property, {
      get: getter,
    });
  };
}
