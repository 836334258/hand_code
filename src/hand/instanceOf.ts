module.exports = function instanceOf(Case: object, Constructor: object) {
	if (
		typeof Case !== 'object' ||
		typeof Constructor !== 'function' ||
		Case === null ||
		Constructor === null
	)
		return false;
	let proto = Reflect.getPrototypeOf(Case);
	while (proto) {
		if (proto === Constructor.prototype) return true;
		proto = Reflect.getPrototypeOf(proto);
	}
	return false;
};
