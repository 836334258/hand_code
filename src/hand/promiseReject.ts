module.exports = function promiseReject(val: any) {
	return new Promise((resovle, reject) => reject(val));
};
