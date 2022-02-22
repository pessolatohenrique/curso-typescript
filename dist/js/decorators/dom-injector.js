export function domInjector(seletor) {
    return function (target, property) {
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, property, {
            get: getter,
        });
    };
}
