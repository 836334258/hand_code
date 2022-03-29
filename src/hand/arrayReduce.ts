import { TArrReduceFn } from './../index.d';

Array.prototype.arrayReduce = function (fn: TArrReduceFn, initval?: any) {
	let _this: any = this;
	let index: number = 0;
	if (initval === undefined) {
		if (_this.length === 0) {
			throw new Error(
				'Reduce of empty array with no initial value at Array.reduce'
			);
		}

		initval = _this[index];
		index++;
	}
	for (; index < _this.length; index++) {
		initval = fn.call(_this, initval, _this[index], index, _this);
	}
	return initval;
};
