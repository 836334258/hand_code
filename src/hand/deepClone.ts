module.exports = function deepClone(obj: Record<string | symbol, any>): object {
	const res: Record<string | symbol, any> = {};
	if (typeof obj !== 'object') return res;

	for (const key of Reflect.ownKeys(obj)) {
		if (typeof obj[key] === 'object') {
			res[key] = deepClone(obj[key]);
		} else {
			res[key] = obj[key];
		}
	}

	return res;
};
