import { capitalizeAll, snakeCaseToCamelCase } from '../string';

describe('string utils', () => {
  test('capitalize all', () => {
    expect(capitalizeAll('foo bar')).toBe('Foo Bar');
    expect(capitalizeAll('')).toBe('');
    expect(capitalizeAll('Foo Bar')).toBe('Foo Bar');
    expect(capitalizeAll('Foo bar')).toBe('Foo Bar');
  });

  test('snake case to camel case', () => {
    expect(snakeCaseToCamelCase('foo_bar')).toBe('fooBar');
    expect(snakeCaseToCamelCase('one_two_three')).toBe('oneTwoThree');
    expect(snakeCaseToCamelCase('')).toBe('');
  });
});
