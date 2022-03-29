module.exports = function ajax(
	url: string,
	method: string = 'get',
	dataType: XMLHttpRequestResponseType = 'text',
	async: boolean = true
) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = dataType;
		xhr.onreadystatechange = () => {
			if (xhr.status === 200 && xhr.readyState === 4) {
				resolve(xhr.responseText);
			}
		};
		xhr.onerror = (e) => {
			reject(e);
		};

		xhr.send();
	});
};
