import { AlwaysTwoDigitsPipe } from './always-two-digits.pipe';

describe('AlwaysTwoDigitsPipe', () => {
  it('create an instance', () => {
    const pipe = new AlwaysTwoDigitsPipe();
    expect(pipe).toBeTruthy();
  });
});
