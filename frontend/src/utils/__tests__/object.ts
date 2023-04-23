import { exclude, isIterable, pick } from '../object';

describe('object utils', () => {
  test('pick', () => {
    const obj = {
      foo: 'bar',
      one: 'two',
      first: 'second',
    };

    expect(pick(obj, [])).toEqual({});
    expect(pick(obj, ['baz'])).toEqual({});
    expect(pick(obj, ['foo'])).toEqual({ foo: 'bar' });
    expect(pick(obj, ['foo', 'one'])).toEqual({ foo: 'bar', one: 'two' });
  });

  test('exclude', () => {
    const obj = {
      foo: 'bar',
      one: 'two',
      first: 'second',
    };

    const objCopy = { ...obj };

    expect(exclude(obj, [])).toEqual(objCopy);
    expect(exclude(obj, ['baz'])).toEqual(objCopy);
    expect(exclude(obj, ['foo'])).toEqual({ one: 'two', first: 'second' });
    expect(exclude(obj, ['foo', 'one'])).toEqual({ first: 'second' });
  });

  test('is iterable', () => {
    expect(isIterable([])).toBeTruthy();
    expect(isIterable('')).toBeTruthy();
    expect(isIterable(1)).toBeFalsy();
  });
});
