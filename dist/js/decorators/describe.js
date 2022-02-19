export function describe() {
    return function (target, property, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`O método ${property} foi chamado em ${this.constructor.name}`);
            const originalReturn = originalMethod.apply(this, args);
            return originalReturn;
        };
        return descriptor;
    };
}
