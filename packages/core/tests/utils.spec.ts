import { ensureSlash } from '@hyperse/utils';

describe('utils', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
  it('should correct append endfix', () => {
    expect(
      ensureSlash('/test', {
        slashEndfix: true,
      })
    ).toBe('/test/');
  });
});
