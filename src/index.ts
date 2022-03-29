require('@/hand/functionCall');
require('@/hand/functionApply');
require('@/hand/functionBind');

const module = {
	x: 42,
	getX: function () {
		return this.x;
	},
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.functionBind(module);
console.log(boundGetX());
