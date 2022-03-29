const debounce = require('@/hand/throttle');

window.addEventListener(
	'click',
	debounce(function () {
		console.log(1);
	}, 1000)
);
