const defaultConfig = require('./.prettierrc.cjs');
const { mergeDeep } = require('./deepmerge.cjs');

/**
 * @function
 * @param {import('prettier').Config} config
 * @param {import('prettier').Config} baseConfig
 * @returns {import('prettier').Config}
 */
function defineConfig(config, baseConfig = defaultConfig) {
	return mergeDeep(baseConfig, config);
}

module.exports = {
	defineConfig,
	defaultConfig,
};
