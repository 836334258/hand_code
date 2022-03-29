import { TRest } from './../index.d';
module.exports = function throttle(fn: TRest, timeout: number) {
	let timer: null | NodeJS.Timeout = null;
	let _this = this;
	let args = arguments;
	return function () {
		if (timer) {
			return;
		}
		timer = setTimeout(() => {
			fn.apply(_this, Array.from(args));
			timer = null;
		}, timeout);
	};
};
