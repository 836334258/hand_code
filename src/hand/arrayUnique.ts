import { TAnyArray } from './../index.d';
module.exports = function arrayUnique(arr: TAnyArray) {
	return Array.from(new Set(arr));
};
