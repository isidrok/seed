import {calc} from './calc';
describe('calc', () => {
  it('adds positive integers', () => {
    expect(calc('+ 1 2')).toBe(3);
  });
  it('adds negative integers', () => {
    expect(calc('+ -1 -2')).toBe(-3);
  });
  it('resolves several operators', () => {
    expect(calc('- + 3 7 + 1 2')).toBe(7);
  });
});
