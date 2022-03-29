const deepClone = require('@/hand/deepClone');

let a = Symbol(1);
let obj = {
	id: 1,
	arr: [1, 2, 3],
	name: 'Tom',
	name1: function () {},
	msg: {
		age: 18,
	},
	[a]: 1,
};

let o = deepClone(obj);
o.arr[0] = 11;

console.log(o);
console.log(obj);
