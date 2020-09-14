import labelComponentFactory from '@/core/js/factories';

test('Hello label prints Hello', () => {
  const label = labelComponentFactory('Hello');

  const result = label.innerHTML;
  const expected = 'Hello';

  expect(result).toBe(expected);
});
