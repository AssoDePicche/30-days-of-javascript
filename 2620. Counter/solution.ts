function createCounter(n: number): () => number {
  return function() {
    n++;
  }
}
