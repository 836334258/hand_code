const promiseAllSettled = require('./hand/promiseAllSettled.ts');

const promises = [Promise.resolve('1'), Promise.reject(2), Promise.resolve(3)];

promiseAllSettled(promises).then((rs) => {
	console.log(rs);
});

// Promise.all(promises).then((rs) => {
//   console.log(rs);
// });
