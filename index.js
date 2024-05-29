//Syntax extracted from https://datatracker.ietf.org/doc/html/rfc6901#section-3
const jsonpointer_regex = /^(?:\/(?:[^\x7e\x2f]|~[01])*)*$/;

const isJSONPointer = (path = '') => path.length === 0 || jsonpointer_regex.test(path);
module.exports = isJSONPointer;
