type Fn = (...args: any[]) => any;

const once = function (fn: Fn): Fn {
  let called = false;

  return function (...args) {
    if (called) {
      return undefined;
    }

    called = true;

    return fn(...args);
  };
};
