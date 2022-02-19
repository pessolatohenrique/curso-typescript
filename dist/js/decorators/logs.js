export function escreveLog(em_segundos = false) {
    return function (target, propertyKey, descriptor) {
        const originalDecorator = descriptor.value;
        descriptor.value = function (...args) {
            const time1 = performance.now();
            const executedFunction = originalDecorator.apply(this, args);
            const time2 = performance.now();
            let divisor = 1;
            let textoDescritivo = "milissegundos";
            if (em_segundos) {
                divisor = 1000;
                textoDescritivo = "segundos";
            }
            const resultTime = (time2 - time1) / divisor;
            console.log(`função ${propertyKey} demorou ${resultTime} ${textoDescritivo}`);
            return executedFunction;
        };
        return descriptor;
    };
}
