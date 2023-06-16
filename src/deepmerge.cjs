function isObject(item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(source, target) {
	let output = Object.assign({}, source);

	if (isObject(source) && isObject(target)) {
		Object.keys(target).forEach(key => {
			if (isObject(target[key])) {
				if (!(key in source))
					Object.assign(output, { [key]: target[key] });
				else
					output[key] = mergeDeep(source[key], target[key]);
			} else {
				Object.assign(output, { [key]: target[key] });
			}
		});
	}
	return output;
}

module.exports = {
	mergeDeep
};
