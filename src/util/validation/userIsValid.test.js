const userIsValid = require('./userIsValid');

describe('Test user validation', () => {
  test('Returned value should be true. Valid user', () => {
    const user = {
      uid: '89348ti45uoq76wre2wa32',
      name: 'Logan Martlew',
      email: 'logan.martlew@gmail.com',
    };

    const isValid = userIsValid(user);
    expect(isValid).toBe(true);
  });

  test('Returned value should be true. Edge case for name length', () => {
    const user = {
      uid: '89348ti45uoq76wre2wa32',
      name: 'g',
      email: 'logan.martlew@gmail.com',
    };

    const isValid = userIsValid(user);
    expect(isValid).toBe(true);
  });

  test('Returned value should be false. Email does not match regex', () => {
    const user = {
      uid: '89348ti45uoq76wre2wa32',
      name: 'Logan Martlew',
      email: 'logan.martlew@gmail',
    };

    const isValid = userIsValid(user);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. UID not provided', () => {
    const user = {
      name: 'Logan Martlew',
      email: 'logan.martlew@gmail.com',
    };

    const isValid = userIsValid(user);
    expect(isValid).toBe(false);
  });

  test('Returned value should be false. User not provided', () => {
    const isValid = userIsValid();
    expect(isValid).toBe(false);
  });
});
