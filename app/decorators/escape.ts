export function escape() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any) {
      let returnMethod = originalMethod.apply(this, args);
      if (typeof returnMethod === "string") {
        returnMethod = returnMethod.replace(/<script>[\s\S]*?<\/script>/, "");
      }
      return returnMethod;
    };
    return descriptor;
  };
}
