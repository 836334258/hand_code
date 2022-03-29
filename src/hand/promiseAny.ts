import { TPromises } from './../index.d';
module.exports = function promiseAny(promises: TPromises) {
	if (!promises.length) return;
	let count: number = 0;
	return new Promise((resove, reject) => {
		promises.forEach((promise) => {
			promise.then(
				(res) => {
					resove(res);
				},
				(err) => {
					if (++count === promises.length) {
						reject(`throw new AggregateError(${err})`);
					}
				}
			);
		});
	});
};
