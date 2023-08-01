type F = (x: number) => number;

const compose = (functions: F[]): F => {
  if (functions.length === 0) {
    return (x: number) => x;
  }

  return functions.reduceRight((f, g) => (x: number) => g(f(x)));
};
