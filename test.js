'use strict';
const m = require('.');

it('works', async () => {
	expect(await m()).toBe('foobar');
});
