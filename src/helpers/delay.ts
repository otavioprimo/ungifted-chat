const delay = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, delay);
  });
};

export default delay;
