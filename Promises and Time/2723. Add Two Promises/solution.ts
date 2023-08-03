const addTwoPromises = async function (
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  return (await promise1) + (await promise2);
};
