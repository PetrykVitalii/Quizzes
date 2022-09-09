export const fakeDelay = async <T>(data: T, delay = 500): Promise<T> => {
  const res = await new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

  return res;
};
