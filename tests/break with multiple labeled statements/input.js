async function(foo) {
	outer: {
		inner: {
			if (await foo()) {
				break outer;
			}
		}
		return false;
	}
	return true;
}
