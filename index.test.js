const isJsonPointer = require('./index.js'); 

describe('isJsonPointer', () => {
  test('Empty string is a valid jsonpointer', () => {
    expect(isJsonPointer('')).toBe(true);
  });
  test('The string "simple" is not a valid json pointer', () => {
    expect(isJsonPointer('simple')).toBe(false);
  });
  test('/contacts/0/phones/0 is a valid json pointer', () => {
    expect(isJsonPointer('/contacts/0/phones/0')).toBe(true);
  });
  test('/with spaces is a valid json pointer', () => {
    expect(isJsonPointer('/with spaces')).toBe(true);
  });
  test('/with unicode characters is a valid json pointer', () => {
    expect(isJsonPointer('/🐃')).toBe(true);
  });
  test('/bars and tildes can be escaped', () => {
    expect(isJsonPointer('/~0/~1')).toBe(true);
  });
  test('/alone tildes are not valid', () => {
    expect(isJsonPointer('/~')).toBe(false);
  });
  test('Paths with "-" to indicate mappings', () => {
    expect(isJsonPointer('/contacts/-/phones/0')).toBe(true);
  });
  test('Number should be false', () => {
    expect(isJsonPointer(2)).toBe(false);
  });
  test('Undefined path fallbacks to empty path', () => {
    expect(isJsonPointer()).toBe(true);
  });
});
