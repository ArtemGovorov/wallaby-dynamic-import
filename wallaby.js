'use strict';

module.exports = async wallaby => ({
	files: ['index.js', '!test.js', 'node_modules/dynamic-import-module/*.js'],
	tests: ['test.js'],
	compilers: {
		'**/*.js': wallaby.compilers.babel()
	},
	env: {
		type: 'node',
		runner: 'node'
	},
	testFramework: 'jest'
});
