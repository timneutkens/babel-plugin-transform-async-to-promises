async function(iter) {
	let result = 0;
	for await (const value of iter) {
		result += value;
		if (result > 10) break;
	}
	return result;
}
