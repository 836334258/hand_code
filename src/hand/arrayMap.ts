Array.prototype.arrayMap = function (fn, thisArg) {
	thisArg = thisArg ? thisArg : window;
	const res = [];

	for (let i = 0; i < this.length; i++) {
		res.push(fn.call(thisArg, this[i], i, this));
	}

	return res;
};
