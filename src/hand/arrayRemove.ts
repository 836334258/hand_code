module.exports = <T>(arr: T[], el: T) => {
	const index: number = arr.indexOf(el);
	if (index > -1) {
		arr.splice(index, 1);
	}
};
