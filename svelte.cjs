const { defineConfig } = require('./utils/index.cjs');

const svelteConfig = defineConfig({
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ 'files': '*.svelte', 'options': { 'parser': 'svelte' } }]
});

module.exports = svelteConfig;
