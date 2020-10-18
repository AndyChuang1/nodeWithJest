import { sum } from '../../../util/sum';

describe('Sum 20 as total price', () => {
  it('add 10', () => {
    const price = 10;
    expect(sum(price)).toBe(30);
  });
  it('add 20', () => {
    const price = 20;
    expect(sum(price)).toBe(40);
  });
});
