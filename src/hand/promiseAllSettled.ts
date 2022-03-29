module.exports = function promiseAllSettled(promisess: any[]) {
	const mapPromisess = promisess.map((item) =>
		item instanceof Promise ? item : Promise.resolve(item)
	);
	return new Promise((resolve: (arg0: any[]) => any) => {
		let count: number = 0;
		const result: any[] = [];
		mapPromisess.forEach((promise) => {
			promise.then(
				(value) => {
					result.push({
						status: 'fulfilled',
						value,
					});
					++count === promisess.length && resolve(result);
				},
				(reason) => {
					result.push({
						status: 'rejected',
						reason,
					});
					++count === promisess.length && resolve(result);
				}
			);
		});
	});
};
