const assert = require('assert');

const capitalizeFirstLetters = (input) => {
  const array = input.split(' ');
  const output = array
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');
  return output;
};

// TESTS
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(
  capitalizeFirstLetters('i am learning TDD'),
  'I Am Learning TDD'
);
assert.strictEqual(capitalizeFirstLetters('hey'), 'Hey');
assert.strictEqual(capitalizeFirstLetters(''), '');
