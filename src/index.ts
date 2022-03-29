const arrayReduce = require('./hand/arrayReduce.ts');

const arr = [1, 1, 2, 3, 3];

console.log(
	arr.arrayReduce((pre, cur) => {
		return pre + cur;
	})
);
