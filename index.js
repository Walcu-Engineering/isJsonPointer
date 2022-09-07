const jsonpointer_regex = new RegExp('^(?:/(?:[0-9a-zA-Z_]+|-))+$');

const isJSONPointer = (path = '') => path.length === 0 || jsonpointer_regex.test(path);
module.exports = isJSONPointer;
