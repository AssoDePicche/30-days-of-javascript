const cancellable = (fn: Function, args: any[], t: number): Function => {
  let willFnCall = true;

  setTimeout(() => willFnCall && fn(...args), t);

  return () => (willFnCall = false);
};
