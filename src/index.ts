const arrayReduce = require('./hand/arrayMap.ts');

const arr = [1, 1, 2, 3, 3];

console.log(
	arr.arrayMap((cur, idx) => ({
		cur,
		idx,
	}))
);
