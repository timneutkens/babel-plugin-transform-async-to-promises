async function(foo, bar) {
	try {
		return foo();
	} catch(e) {
		return await bar();
	}
}
