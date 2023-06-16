const { defineConfig } = require('../setup.cjs');

const svelteConfig = defineConfig({
	plugins: ['prettier-plugin-svelte'],
	pluginSearchDirs: ['.'],
	overrides: [{ 'files': '*.svelte', 'options': { 'parser': 'svelte' } },]
});

module.exports = svelteConfig;
