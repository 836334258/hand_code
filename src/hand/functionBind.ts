Function.prototype.functionBind = function (_this: any) {
	const __this = this;
	return function () {
		return __this.apply(_this, arguments);
	};
};
