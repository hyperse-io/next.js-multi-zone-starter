import { ensureSlash } from '@/ensure-slash';

describe('utils', () => {
  it('should correct append endfix', () => {
    expect(
      ensureSlash('/test', {
        slashEndfix: true,
      })
    ).toBe('/test/');
  });
});
