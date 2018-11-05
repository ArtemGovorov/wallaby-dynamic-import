'use strict';

module.exports = async wallaby => ({
	files: ['index.js', '!test.js', 'babel.config.js'],
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
