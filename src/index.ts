require('@/hand/functionCall');
require('@/hand/functionApply');

const obj = {
	name: 'obj',
};

function a(name) {
	console.log(this.name);
	console.log(name);
}

a.functionCall(obj, 'call');
a.functionApply(obj, ['call']);
