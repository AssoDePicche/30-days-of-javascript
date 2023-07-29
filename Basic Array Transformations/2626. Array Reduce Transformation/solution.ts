type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) return init;

  for (let index: number = 0; index < nums.length; ++index) {
    init = fn(init, nums[index]);
  }

  return init;
}
