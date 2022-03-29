const promiseRace = require('./hand/promiseRace.ts');

const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'two');
});

promiseRace([promise1, promise2]).then((value) => {
	console.log(value);
	// Both resolve, but promise2 is faster
});
