export function describe() {
  return function (
    target: any,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any) {
      console.log(
        `O método ${property} foi chamado em ${this.constructor.name}`
      );
      const originalReturn = originalMethod.apply(this, args);
      return originalReturn;
    };
    return descriptor;
  };
}
