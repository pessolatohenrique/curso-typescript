export function escreveLog() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalDecorator = descriptor.value;
    descriptor.value = function (...args: any) {
      const time1 = performance.now();
      const executedFunction = originalDecorator.apply(this, args);
      const time2 = performance.now();
      const resultTime = (time2 - time1) / 1000;
      console.log(`função ${propertyKey} demorou ${resultTime} segundos`);
      return executedFunction;
    };

    return descriptor;
  };
}