async function(foo) {
	var values = [];
	for (var key in foo) {
		if (Object.prototype.hasOwnProperty.call(foo, key)) {
			values.push(await foo[key]());
		}
	}
	return values.sort();
}
