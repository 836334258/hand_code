module.exports = function promiseAll(promises: Promise<any>[]) {
  if (!Array.isArray(promises)) {
    throw new TypeError('array need');
  }
  return new Promise((resove, reject) => {
    const res: any[] = [];
    let count: number = 0;
    promises.forEach((promise) => {
      promise.then(
        (rs) => {
          res.push(rs);
          ++count === promises.length && resove(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
};
