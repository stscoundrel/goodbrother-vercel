import { authenticate } from '../src/auth';

describe('Auth tests', () => {
  test('Compares provided auth with .env variable', () => {
    process.env.CLIENT_SECRET = 'and-if-the-day-would-only-come';

    const result1 = authenticate('and-if-the-day-would-only-come');
    const result2 = authenticate('then-you-might-just-appear');

    expect(result1).toBeTruthy();
    expect(result2).toBeFalsy();
  });
});
