export function fetchNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() > 0.8;
      if (shouldFail) {
        reject("Failed to fetch numbers. Server error!");
      } else {
        // Create an array of numbers first
        const numbers = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 100)
        );

        // Convert numbers into an array of objects with same structure
        const data = numbers.map((number) => ({
          id: number, // for example, assign the number as 'id'
          value: number, // use the same number for 'value'
        }));

        // Resolve the data as an array of objects
        resolve({ json: () => Promise.resolve(data) });
      }
    }, 500);
  });
}

export function shuffleArray(array) {
  let shuffledArray = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffledArray;
}
