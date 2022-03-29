module.exports = function promiseResolve(val: any) {
	if (val instanceof Promise) return val;

	return new Promise((resovle) => resovle(val));
};
