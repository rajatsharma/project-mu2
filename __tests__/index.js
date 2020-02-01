const test = require('ava');
const I = require('../src');

test('Should log dino', (t) => {
  t.is(I(6), 6);
});
