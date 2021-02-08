const assert = require('assert');

// TESTS
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters('i am learning TDD'),
  'I Am Learning TDD'
);

assert.strictEqual(capitalizeFirstLetters('hey'), 'Hey');
assert.strictEqual(capitalizeFirstLetters(''), '');
