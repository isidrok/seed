export function calc(value: string) {
  const matcher = /([-+*\/]) (-?\d+) (-?\d+)/g;
  while (Number.isNaN(Number(value))) {
    value = value.replace(matcher, (_, op, a, b) => {
      return eval(a + op + b);
    });
  }
  return Number(value);
}
