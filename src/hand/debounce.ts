import { TRest } from './../index.d';
module.exports = function debounce(fn: TRest, timeout: number) {
	let timer: null | NodeJS.Timeout = null;
	let _this = this;
	let args = arguments;
	return function () {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(_this, Array.from(args));
		}, timeout);
	};
};
