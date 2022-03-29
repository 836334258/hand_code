Function.prototype.functionApply = function (_this: any) {
	_this = _this ?? window;
	const key = Symbol('key');
	_this[key] = this;
	const ans = _this[key](...(arguments[1] ?? []));
	Reflect.deleteProperty(_this, key);
	return ans;
};
