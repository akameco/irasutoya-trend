import test from 'ava';
import fetchImages from '.';

test('fetch', async t => {
  t.is((await fetchImages()).length, 10);
});
