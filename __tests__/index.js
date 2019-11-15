import test from 'ava';
import I from '../src';

test('Should log dino', t => {
  t.is(I(6), 6);
});
