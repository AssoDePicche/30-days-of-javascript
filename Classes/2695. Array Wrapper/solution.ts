class ArrayWrapper {
  constructor(private data: number[]) {}

  valueOf(): number {
    return this.data.reduce((accum, current) => (accum += current), 0);
  }

  toString(): string {
    return `[${this.data.join(",")}]`;
  }
}
