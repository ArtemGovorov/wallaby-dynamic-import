'use strict';
const dynamicImportModule = require('dynamic-import-module');

module.exports = async () => {
	const foo = await dynamicImportModule();
	const bar = await import('./bar');

	return foo + bar;
}
