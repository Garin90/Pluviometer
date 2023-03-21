export function fetchData(city, date) {
  return new Promise((resolve) => {
    const randomWaitTime = Math.random() * 2000;

    setTimeout(() => {
      const randomResult = Math.floor(Math.random() * 100);
      resolve(randomResult);
    }, randomWaitTime);
  });
}
