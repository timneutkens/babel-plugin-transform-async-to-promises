async f => expect((await f(async _ => false, _ => 1, _ => 0))).toBe(0)