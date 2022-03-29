import { TPromises } from './../index.d';
module.exports = function promiseRace(promises: TPromises) {
	return new Promise((resolve, reject) => {
		promises.forEach((promise) => {
			Promise.resolve(promise).then(
				(res) => {
					resolve(res);
				},
				(err) => {
					reject(err);
				}
			);
		});
	});
};
