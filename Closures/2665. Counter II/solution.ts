type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let counter: number = init;

  return {
    increment() {
      return ++counter;
    },
    decrement() {
      return --counter;
    },
    reset() {
      return (counter = init);
    },
  };
}
