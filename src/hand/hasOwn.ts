module.exports = (val: object, key: string | symbol) => {
	return Object.prototype.hasOwnProperty.call(val, key);
};
